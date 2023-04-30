import { useEffect, useState } from "react";
import './Shop.css';
import getDailyShop from "../../FortniteApi/fortniteApi";
import Preloader from "../Preloader";
import GoodItem from "../goodItem/GoodItem";
import Basket from "../basket/Basket";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);

  const addItemToOrder = (prop) => {
    const { id, url, title, description, price } = prop;
    const newOrderItem = {
      id,
      quantity: 1,
      url,
      title,
      description,
      price,
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

  const content = !goods.length ? <h3>Nothing here ...</h3> :
    goods.map((item) => (
      <GoodItem key={item.mainId}
        id={item.mainId}
        url={item.displayAssets[0].background}
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


  return (
    <>
      {isLoading ? null : <Basket quantity={order.length} />}
      <main className='container shop-container'>
        {isLoading ? <Preloader /> : content}
      </main>
    </>

  );
};



export default Shop;