import { connect } from 'react-redux';
import Checklist from './Checklist';

export function mapStateToProps(state) {
  return {
    cartList: state.cartReducer.cart,
  };
}

export default connect(mapStateToProps, null)(Checklist);
