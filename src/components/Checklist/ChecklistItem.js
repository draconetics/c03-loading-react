import React from 'react';
import ReactStars from 'react-stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faHeart, faPlane } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';

function ChecklistItem({ item, addItem, decrementItem }) {
  const { product, size } = item;
  return (
    <ul className="checklist__content">
      <div className="checklist__select">
        <label>
          <input type="checkbox" />
        </label>
      </div>
      <div className="checklist__item">
        <img src={product.image} />
        <div className="checklist__item-content">
          <ReactStars
            count={5}
            value={product.ranking}
            size={24}
            color2="#ffd700"
            edit={false}
          />
          <h4>US {product.price}$</h4>
          <p>{product.description}</p>
          <p>{product.madeUp}</p>
        </div>
      </div>
      <div className="checklist__options">
        <div className="checklist__inc-dec">
          <button type="button" onClick={() => addItem(product)}>
            +
          </button>
          <p>{size}</p>
          <button type="button" onClick={() => decrementItem(product)}>
            -
          </button>
        </div>
        <div className="checklist__social">
          <span>
            <FontAwesomeIcon icon={faTrash} />
          </span>
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
      </div>
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    cartList: state.cartReducer.cart,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (newItem) => dispatch({ type: 'CART_INSERT_ITEM', value: newItem }),
  decrementItem: (item) =>
    dispatch({ type: 'CART_DECREMENT_ITEM', value: item }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChecklistItem);
