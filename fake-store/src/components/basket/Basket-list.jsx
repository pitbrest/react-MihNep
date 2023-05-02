import PropTypes from 'prop-types';
import BasketItem from './basket-item/Basket-item';

function BasketList(props) {
  const { order, basketStatusHandler } = props;

  const totalPrice = order.reduce((acc, item) => item.price * item.quantity + acc, 0);

  return (
    <div className='basketList-container'>
      <div className="material-icons close-icon"
        onClick={basketStatusHandler}
        onKeyDown={() => { }}
        role='button'
        tabIndex={0}>close</div>
      <ul className="basket-content collection">
        {order ? order.map(item => <BasketItem
          key={item.id}
          {...item} />) : 'Ваша корзина пуста'}
      </ul>
      <div className="basket-totalInfo">Ваш заказ: <span>{totalPrice}</span> руб</div>
    </div>
  );
}

BasketList.propTypes = {
  order: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  basketStatusHandler: PropTypes.func.isRequired,
  deleteOrderItem: PropTypes.func.isRequired
};

export default BasketList;