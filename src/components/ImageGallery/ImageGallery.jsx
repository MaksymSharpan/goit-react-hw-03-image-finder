import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import style from './ImageGallery.module.scss';

// function ImageGallery({ chidren }) {
//   return <ul className={style.ImageGallery}>{chidren}</ul>;
// }

function ImageGallery({ hits, onClick }) {
  const imageEl = hits.map(hit => (
    <ImageGalleryItem onClick={onClick} key={hit.id} {...hit} />
  ));
  return <ul className={style.ImageGallery}>{imageEl}</ul>;
}

export default ImageGallery;
