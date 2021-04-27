import React, { Component, createRef } from 'react';
import API from './api';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';

// import style from './App.module.scss';

class App extends Component {
  state = {
    hits: [],
    query: '',
    isLoading: false,
    page: 1,
    limit: 12,
    error: null,
    showModal: false,
    activeImg: '',
  };

  listRef = createRef();

  // findImages = e => {
  //   e.preventDefault();
  //   const inputValue = e.target.value;
  //   this.setState({ value: inputValue });
  // };
  onChangeQuery = value => {
    this.setState({
      hits: [],
      query: value,
      isLoading: true,
      page: 1,
    });
  };

  loadMore = e => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
  };

  fetchImages = () => {
    const { query, page, limit } = this.state;

    API.fetchArticles(query, page, limit)
      .then(hits =>
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          isLoading: false,
          page: page + 1,
        })),
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false,
        }),
      );
    // .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = src => {
    this.setState(({ showModal, activeImg }) => ({
      showModal: !showModal,
      activeImg: src,
    }));
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.hits.length < this.state.hits.length) {
      const { current } = this.listRef;
      return current.scrollHeight;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.isLoading) {
      this.fetchImages();
    }
    if (snapshot !== null) {
      window.scrollTo({
        top: snapshot,
        behavior: 'smooth',
      });
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    // console.log(this.props.value);
    // API.fetchArticles(this.props.value)
    //   .then(articles => this.setState({ articles }))
    //   .catch(error => this.setState({ error }))
    //   .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { isLoading, hits, showModal, activeImg } = this.state;
    const { onChangeQuery, loadMore, toggleModal } = this;
    return (
      <>
        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={activeImg} alt="" />
          </Modal>
        )}
        <Searchbar onSubmit={onChangeQuery} />
        <div ref={this.listRef}>
          <ImageGallery hits={hits} onClick={toggleModal} />
        </div>

        {isLoading && <Loader />}
        <Button onClick={loadMore} />
      </>
    );
  }
}

export default App;
