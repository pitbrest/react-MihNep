import { useContext } from 'react';
import BasketItem from './basket-item/Basket-item';
import { ShopContext } from '../../context/context';

function BasketList() {
  const { order, basketStatusHandler, deleteOrderItem, orderItemCountHandler } = useContext(ShopContext);

  const totalPrice = order.reduce((acc, item) => item.price * item.quantity + acc, 0);

  return (
    <div className="modal-wrapper">
      <div className='basketList-container'>
        <div className="material-icons close-icon"
          onClick={basketStatusHandler}
          onKeyDown={() => { }}
          role='button'
          tabIndex={0}>close
        </div>
        <ul className="basket-content collection">
          {order.length ? order.map(item => {
            const { id, quantity, url, title, description, price } = item;
            return <BasketItem
              key={id} id={id}
              quantity={quantity} url={url}
              title={title} description={description}
              price={price}
              deleteOrderItem={deleteOrderItem}
              orderItemCountHandler={orderItemCountHandler} />;
          }) : null}
        </ul>
        {order.length ? <><div className="basket-totalInfo">Ваш заказ: <span>${totalPrice}</span> руб</div>
          <button className='btn confirm-btn' type='button'>Оформить заказ</button></> : <button className='btn confirm-btn' type='button'>Ваша корзина пуста</button>}
      </div>
    </div>
  );
}

export default BasketList;