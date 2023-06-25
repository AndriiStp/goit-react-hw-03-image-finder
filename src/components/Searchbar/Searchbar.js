import React from 'react';
import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.search__form}>
          <button
            onSubmit={this.handleSubmit}
            type="submit"
            className={css.search__button}
          >
            <span className={css.search__label}>Search</span>
          </button>

          <input
            className={css.search__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
