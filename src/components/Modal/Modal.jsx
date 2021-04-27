import React from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.scss';

// function Modal(event) {
//   if (event.target !== event.currentTarget) {
//     const url = event.target.dataset.source;

//     if (url) {
//       return (
//         <div className={style.Overlay}>
//           <div className={style.Modal}>
//             <img src={url} alt="" />
//           </div>
//         </div>
//       );
//     }
//   }
// }
const modalRoot = document.querySelector('#modal-root');

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // componentDidUpdate() {}

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div onClick={this.handleClickBackdrop} className={style.Overlay}>
        <div className={style.Modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
