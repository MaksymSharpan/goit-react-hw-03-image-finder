import React from 'react';

import style from './ImageGallery.module.scss';

function ImageGallery({ chidren }) {
  return (
    <>
      <ul className={style.ImageGallery}>{chidren}</ul>
    </>
  );
}

export default ImageGallery;
