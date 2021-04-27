import React from 'react';

import style from './ImageGalleryItem.module.scss';

// const ImageGalleryItem = ({ hits }) => {
//   hits.map(({ id, tags, webformatURL, largeImageURL }) => (
//     <li key={id} className={style.ImageGalleryItem}>
//       <img
//         src={webformatURL}
//         alt={tags}
//         className={style.ImageGalleryItemImage}
//         data-source={largeImageURL}
//       />
//     </li>
//   ));
// };

const ImageGalleryItem = ({ tags, webformatURL, largeImageURL, onClick }) => (
  <li className={style.ImageGalleryItem}>
    <img
      src={webformatURL}
      alt={tags}
      className={style.ImageGalleryItemImage}
      onClick={() => onClick(largeImageURL)}
    />
  </li>
);

export default ImageGalleryItem;
