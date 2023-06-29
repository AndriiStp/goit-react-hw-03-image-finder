import React from 'react';
import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from './Button/Button';
import css from './App.module.css';

export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    totalHits: 0,
    images: [],
  };

  handleSearchSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  handleImagesData = (hits, totalHits) => {
    this.setState(prevState => ({
      images: [...prevState.images, ...hits],
      totalHits,
    }));
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { searchQuery, page, totalHits, images } = this.state;
    const moreContent = images.length < totalHits && images.length > 0;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery
          searchQuery={searchQuery}
          page={page}
          onImagesData={this.handleImagesData}
        />
        {moreContent && <Button handleLoadMore={this.handleLoadMore} />}
      </div>
    );
  }
}
