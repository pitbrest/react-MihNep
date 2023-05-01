import './Basket-item.css';

function BasketItem(prop) {
  const { url, title, description, price } = prop;

  return (
    <li className='collection-item basketItem-container'>
      <img className='basketItem-img'
        src={url}
        alt="basket item" />
      <div className="item-info">
        <div className="item-description">
          <div className="item-title">{title}</div>
          <div className="item-subtitle">{description}</div>
        </div>
        <div className="item-price">{price}</div>
      </div>
      <div className="itemCount-handler">
        <button
          className='material-icons grey lighten-2'
          type='button'>chevron_left</button>
        <span className='item-quantity'>1</span>
        <button className='material-icons grey lighten-2' type='button'>chevron_right</button>
      </div>
    </li>
  );
}

export default BasketItem;