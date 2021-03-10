import { connect } from 'react-redux';
import Item from './Item';

export function mapStateToProps(state) {
  return {
    cartList: state.cartReducer.cart,
  };
}

export const mapDispatchToProps = (dispatch) => ({
  addItem: (newItem) => dispatch({ type: 'CART_INSERT_ITEM', value: newItem }),
  decrementItem: (item) => dispatch({ type: 'CART_DECREMENT_ITEM', value: item }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
