import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={classes.backDrop}>
      <div className={classes.modal}>
        <div>Name of Product</div>
        <div>Quantity x Amount</div>
        <div>Total Amount</div>
        <button>Purchase</button>
        <button onClick={props.notShowModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
