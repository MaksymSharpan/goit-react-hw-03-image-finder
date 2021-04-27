import React from 'react';

import style from './Button.module.scss';

function Button({ onClick }) {
  return (
    <button onClick={onClick} className={style.Button}>
      Load more
    </button>
  );
}

export default Button;
