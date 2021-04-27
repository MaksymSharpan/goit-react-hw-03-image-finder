import React from 'react';
import style from './Searchbar.module.scss';

// const Searchbar = ({ onSubmit }) => {
//   return (
//     <header className={style.Searchbar}>
//       <form className={style.SearchForm}>
//         <button
//           onSubmit={onSubmit}
//           type="submit"
//           className={style.SearchFormButton}
//         >
//           <span className={style.SearchFormButtonLabel}>Search</span>
//         </button>

//         <input
//           className={style.SearchFormInput}
//           type="text"
//           // autocomplete="off"
//           // autofocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
// };

// export default Searchbar;

class Searchbar extends React.Component {
  state = {
    value: '',
  };

  handleChange = e => {
    const inputValue = e.currentTarget.value;
    this.setState({
      value: inputValue,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <header className={style.Searchbar}>
        <form onSubmit={handleSubmit} className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            value={value}
            onChange={handleChange}
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
