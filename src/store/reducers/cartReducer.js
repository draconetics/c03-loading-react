/* eslint-disable no-underscore-dangle */
const init = {
  cart: [],
};

const task = (state = init, action) => {
  switch (action.type) {
    case 'CART_INSERT_ITEM': {
      let existItem = false;
      const newCartList = state.cart.map((item) => {
        if (item.product._id === action.value._id) {
          existItem = true;
          item.size += 1;
        }
        return item;
      });
      if (existItem) {
        return { ...state, cart: newCartList };
      }
      const newProduct = {
        product: action.value,
        size: 1,
      };
      return { ...state, cart: [...state.cart, newProduct] };
    }
    case 'CART_DECREMENT_ITEM': {
      const newCartList = state.cart.map((item) => {
        if (item.product._id === action.value._id) {
          if (item.size > 1) {
            item.size -= 1;
          }
        }
        return item;
      });
      return { ...state, cart: newCartList };
    }
    case 'CART_UPDATE_ITEM': {
      const newTaskList = state.taskList.map((item) => {
        const editedItem = item;
        if (editedItem._id === action.value._id) {
          editedItem.task = action.value.task;
        }
        return editedItem;
      });
      return { ...state, taskList: newTaskList };
    }
    default:
      return state;
  }
};

export default task;
