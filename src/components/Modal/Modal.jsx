import React from 'react';

import style from './Modal.module.scss';

function Modal(event) {
  if (event.target !== event.currentTarget) {
    const url = event.target.dataset.source;
    const alt = event.target.alt;
    if (url) {
      return (
        <div className={style.Overlay}>
          <div className={style.Modal}>
            <img src={url} alt={alt} />
          </div>
        </div>
      );
    }
  }
}

export default Modal;
