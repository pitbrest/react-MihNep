import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';
import reducer from "./reducer";

const ShopContext = createContext(null);

const initialState = {
  goods: [],
  isLoading: true,
  order: [],
  busketStatus: false
};

function WithContext({ children }) {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (itemProps) => {
    dispatch({ type: 'Set_Goods', payload: itemProps });
  };

  value.basketStatusHandler = () => {
    dispatch({ type: 'Basket_Status_Handler' });
    // функция dispatch принимает action, который содержит в себе два ключа - type и payload, тут мы сразу деструртуризируем объект action и забираем нам нужный ключь
  };

  value.addItemToOrder = (itemProps) => {
    dispatch({ type: 'Add_Item_To_Order', payload: { props: itemProps } });
  };

  value.deleteOrderItem = (itemId) => {
    dispatch({ type: 'Delete_Order_Item', payload: { id: itemId } });
  };

  value.orderItemCountHandler = (itemId, handlerAction) => {
    dispatch({ type: 'Order_Item_Count_Handler', payload: { id: itemId, action: handlerAction } });
  };

  return <ShopContext.Provider value={value}> {children} </ShopContext.Provider>;
};

WithContext.propTypes = {
  children: PropTypes.node.isRequired
};

export { ShopContext, WithContext };