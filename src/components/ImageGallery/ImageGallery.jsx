// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { Component } from 'react';

class ImageGallery extends Component {
  state = {
    images: [],
  };

  // componentDidMount() {
  //   const baseURl =
  //     'https://pixabay.com/api/?q=cat&page=1&key=36119540-6b0ed103a080a17c105931ea0&image_type=photo&orientation=horizontal&per_page=12';

  //   fetch(baseURl)
  //     .then(resp => resp.json())
  //     .then(images => this.setState({ images }));
  // }

  render() {
    return (
      <ul className="gallery">
        <p>Hello</p>
      </ul>
    );
  }
}

export default ImageGallery;
