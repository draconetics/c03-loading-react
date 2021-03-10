/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faHeart } from '@fortawesome/free-solid-svg-icons';

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
        <img src={product.image} alt={product.name} />
        <div className="checklist__item-content">
          <ReactStars
            count={5}
            value={product.ranking}
            size={24}
            color2="#ffd700"
            edit={false}
          />
          <h4>
            US
            {product.price}
            $
          </h4>
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

ChecklistItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  decrementItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    size: PropTypes.number.isRequired,
    product: {
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      madeUp: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      ranking: PropTypes.number.isRequired,
    },
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    cartList: state.cartReducer.cart,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (newItem) => dispatch({ type: 'CART_INSERT_ITEM', value: newItem }),
  decrementItem: (item) => dispatch({ type: 'CART_DECREMENT_ITEM', value: item }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChecklistItem);
