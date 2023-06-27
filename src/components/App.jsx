import React from 'react';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    searchQuery: '',
    // images: [],
  };

  handleSearchSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
