export default function reducer(state, action) {
  // action - объект, который содержит в себе два ключа - type и payload,   type - тип события, в payload - передается параметр функции (в виде конкретного значения или объекта или пр.. и от того как он передается зависит как его потом извлекать, напрямую из payload или деструктурируя сущность)
  const { type, payload } = action;

  switch (type) {
    case 'Set_Goods': {
      return {
        ...state,
        goods: payload || [],
        isLoading: false,
      };
    }

    case 'Basket_Status_Handler': {
      return {
        ...state,
        busketStatus: !state.busketStatus,
      };
    }

    case 'Add_Item_To_Order': {
      const { id, url, title, description, price } = payload.props;
      const newOrderItem = {
        id,
        quantity: 1,
        url,
        title,
        description,
        price,
      };

      const checkingOrder = state.order.filter((item) => item.id === id).length;

      if (checkingOrder) {
        const changedOrder = state.order.map((item) => {
          let changedItem = item;
          if (changedItem.id === id) {
            changedItem = {
              ...changedItem,
              quantity: changedItem.quantity + 1,
            };
          }
          return changedItem;
        });
        return {
          ...state,
          order: changedOrder,
        };
      }
      return {
        ...state,
        order: [...state.order, newOrderItem],
      };
    }

    case 'Delete_Order_Item': {
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    }

    case 'Order_Item_Count_Handler': {
      console.log(payload);

      const newOrder = state.order.map((item) => {
        const changedItem = item;
        if (changedItem.id === payload.id) {
          changedItem.quantity -= 1;
        }
        return changedItem;
      });
      return {
        ...state,
        order: newOrder,
      };
    }

    // const targetItem = state.order.filter((item) => item.id === payload.id);
    // if (targetItem[0].quantity !== 1) {
    //   newState = {
    //     ...state,
    //     order: state.order.map((item) => {
    //       const changedItem = item;
    //       if (item.id === payload.id) changedItem.quantity -= 1;
    //       return changedItem;
    //     }),
    //   };
    // }
    // return { ...newState };

    default:
      return { ...state };
  }
}
