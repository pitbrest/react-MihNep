import PropTypes from 'prop-types';
import './Basket .css';

function Basket(props) {
  const { quantity = 0 } = props;
  return (
    <div className='basket-container right'>
      {quantity ? <span className="dark-text cart-quantity">{quantity}</span> : null}
      <i className="material-icons medium blue-grey-text text-darken-2 right basket">shopping_cart </i>
    </div>

  );
}

Basket.propTypes = {
  quantity: PropTypes.number.isRequired
};

export default Basket;