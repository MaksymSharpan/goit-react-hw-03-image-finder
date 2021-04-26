import React from 'react';

import API from './api';

import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
// import Modal from './components/Modal';

// import style from './App.module.scss';

class App extends React.Component {
  state = {
    articles: [],
    value: '',
    isLoading: false,
    error: null,
    showModal: false,
  };

  onChangeInput = ({ target }) => {
    const inputValue = target.value;
    this.setState({ value: inputValue });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    console.log(this.state.value);

    API.fetchArticles(this.state.value)
      .then(articles => this.setState({ articles }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { articles, value, isLoading, error, showModal } = this.state;
    const { onChangeInput } = this;
    return (
      <>
        <Searchbar onSubmit={onChangeInput} />
        {/* <ImageGallery /> */}
        <ImageGalleryItem articles={articles} />
      </>
    );
  }
}

export default App;
