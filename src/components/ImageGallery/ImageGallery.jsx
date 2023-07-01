import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import css from './imageGallery.module.css';

class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.searchQuery;
    const nextName = this.props.searchQuery;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.fetchImages(nextName, nextPage);
    }
  }

  fetchImages = (searchQuery, page) => {
    this.setState({ status: 'pending' });

    fetch(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=36119540-6b0ed103a080a17c105931ea0&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(imagesData => {
        const { hits, totalHits } = imagesData;
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          status: 'resolved',
        }));
        this.props.onImagesData(hits, totalHits);
      });
  };

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return null;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <h1>Error, please try again later!</h1>;
    }

    if (status === 'resolved') {
      return (
        <ul className={css.image__gallery}>
          {images.map(({ id, tags, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              alt={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          ))}
        </ul>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onImagesData: PropTypes.func.isRequired,
};

export default ImageGallery;
