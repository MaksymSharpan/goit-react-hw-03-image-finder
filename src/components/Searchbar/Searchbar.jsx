import React from 'react';
import style from './Searchbar.module.scss';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm}>
        <button
          onSubmit={onSubmit}
          type="submit"
          className={style.SearchFormButton}
        >
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={style.SearchFormInput}
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
