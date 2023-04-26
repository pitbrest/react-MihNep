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
    const { id, ...rest } = prop;
    const filteredOrders = order.filter(item => item.id === id);

    if (filteredOrders.length) {
      const transformedArr = order.map(item => {
        const checkedItem = item;
        if (checkedItem.id === id) {
          checkedItem.count += 1;
        }
        return checkedItem;
      });
      setOrder(transformedArr);
    } else {
      setOrder([...order, { id, count: 1, value: rest }]);
    }
  };

  const content = !goods.length ? <h3>Nothing here ...</h3> :
    goods.map((item) => (
      <GoodItem
        key={item.mainId}
        id={item.mainId}
        url={item.displayAssets[0].background}
        title={item.displayName}
        description={item.displayDescription}
        price={item.price.finalPrice}
        addItemToOrder={addItemToOrder}
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
}



export default Shop;