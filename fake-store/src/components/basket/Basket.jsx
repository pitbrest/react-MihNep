import { useContext } from 'react';
import { ShopContext } from '../../context/context';
import './Basket .css';

function Basket() {
  const { basketStatusHandler, order } = useContext(ShopContext);

  return (
    <div className='basket-container right'
      onClick={basketStatusHandler}
      onKeyDown={() => { }}
      role='button'
      tabIndex={0}>
      {order.length ? <span className="dark-text cart-quantity">{order.length}</span> : null}
      <i className="material-icons medium blue-grey-text text-darken-2 right basket">shopping_cart </i>
    </div>
  );
}

export default Basket;