import { useEffect, useContext } from "react";
import { ShopContext } from "../../context/context";
import getDailyShop from "../../FortniteApi/fortniteApi";
import './Shop.css';
import Preloader from "../Preloader";
import GoodItem from "../goodItem/GoodItem";
import Basket from "../basket/Basket";
import BasketList from "../basket/Basket-list";

function Shop() {
  const { goods, setGoods, isLoading,
    busketStatus, addItemToOrder, order } = useContext(ShopContext);

  const content = !goods.length ? <h3>Nothing here ...</h3> :
    goods.filter(i => i.mainId).map(item => (
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
    getDailyShop().then(data => {
      setGoods(data);
    });
  }, [setGoods]);

  useEffect(() => {
    if (busketStatus) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [busketStatus]);

  return (
    <div className="shop-content">
      {isLoading ? null : <Basket />}
      {busketStatus ? <BasketList /> : null}
      <main className='container shop-container'>
        {isLoading ? <Preloader /> : content}
      </main>
    </div>
  );
}

export default Shop;