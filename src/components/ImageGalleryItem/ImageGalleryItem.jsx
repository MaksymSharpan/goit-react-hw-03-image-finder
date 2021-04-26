import React from 'react';

import style from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ articles }) => {
  const itemElement = articles.map(
    ({ id, tags, webformatURL, largeImageURL }) => (
      <li key={id} className={style.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          className={style.ImageGalleryItemImage}
          data-source={largeImageURL}
        />
      </li>
    ),
  );

  return (
    <>
      <ul className={style.ImageGallery}>{itemElement}</ul>
    </>
  );
};

export default ImageGalleryItem;
