import { connect } from 'react-redux';
import Header from './Header';

export function mapStateToProps(state) {
  return {
    cartList: state.cartReducer.cart,
  };
}

export default connect(mapStateToProps, null)(Header);
