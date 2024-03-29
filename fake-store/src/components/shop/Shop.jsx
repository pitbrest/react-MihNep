import { useEffect, useState } from "react";
import './Shop.css';
import getDailyShop from "../../FortniteApi/fortniteApi";
import Preloader from "../Preloader";
import GoodItem from "../goodItem/GoodItem";
import Basket from "../basket/Basket";
import BasketList from "../basket/Basket-list";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [busketStatus, setBusketStatus] = useState(false);

  const addItemToOrder = (prop) => {
    const { id, url, title, description, price } = prop;
    const newOrderItem = {
      id,
      quantity: 1,
      url,
      title,
      description,
      price
    };

    const checkingOrder = order.filter(item => item.id === id).length;

    if (checkingOrder) {
      const changedOrder = order.map(item => {
        let changedItem = item;
        if (changedItem.id === id) { changedItem = { ...changedItem, quantity: changedItem.quantity + 1 }; };
        return changedItem;
      });
      setOrder(changedOrder);
    } else {
      setOrder([...order, newOrderItem]);
    }
  };

  const deleteOrderItem = (id) => {
    setOrder(order.filter(item => item.id !== id));
  };

  const orderItemCountHandler = (id, action) => {
    if (action === 'inc') {
      setOrder(order.map(item => {
        const changedItem = item;
        if (item.id === id) changedItem.quantity += 1;
        return changedItem;
      }));
    } else {
      const targetItem = order.filter(item => item.id === id);
      if (targetItem[0].quantity !== 1) {
        setOrder(order.map(item => {
          const changedItem = item;
          if (item.id === id) changedItem.quantity -= 1;
          return changedItem;
        }));
      }
    }
  };

  const basketStatusHandler = () => {
    setBusketStatus(!busketStatus);
  };

  const content = !goods.length ? <h3>Nothing here ...</h3> :
    goods.filter(i => i.mainId).map((item) => (
      <GoodItem key={item.mainId}
        id={item.mainId}
        url={item.displayAssets.length ? item.displayAssets[0].url : 'https://imgholder.ru/300x300/46CDCF/000&text=Image+not+found&font=kelson'}
        title={item.displayName}
        description={item.displayDescription}
        price={item.price.finalPrice}
        addItemToOrder={addItemToOrder}
        order={order}
      />
    ));

  useEffect(() => {
    getDailyShop()
      .then(data => {
        if (data) {
          setGoods(data);
          setIsLoading(false);
        }
      });
  }, []);

  useEffect(() => {
    if (busketStatus) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [busketStatus]);

  return (
    <div className="shop-content">
      {isLoading ? null : <Basket quantity={order.length}
        basketStatusHandler={basketStatusHandler} />}
      {busketStatus ?
        <BasketList
          order={order}
          basketStatusHandler={basketStatusHandler}
          deleteOrderItem={deleteOrderItem}
          orderItemCountHandler={orderItemCountHandler} /> : null}
      <main className='container shop-container'>
        {isLoading ? <Preloader /> : content}
      </main>
    </div>
  );
}

export default Shop;