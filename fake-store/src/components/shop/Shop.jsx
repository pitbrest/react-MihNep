import { useEffect, useState } from "react";
import './Shop.css';
import getDailyShop from "../../FortniteApi/fortniteApi";
import Preloader from "../Preloader";
import GoodItem from "../goodItem/GoodItem";
import Basket from "../basket/Basket";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const content = !goods.length ? <h3>Nothing here ...</h3> :
    goods.map(item => (
      <GoodItem
        url={item.displayAssets[0].background}
        title={item.displayName}
        description={item.displayDescription}
        price={item.price.finalPrice}
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
      {isLoading ? null : <Basket quantity={0} />}
      <main className='container shop-container'>
        {isLoading ? <Preloader /> : content}
      </main>
    </>

  );
}

export default Shop;