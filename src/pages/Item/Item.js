/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Item(props) {
  console.log(props);
  const {
    location = {}, cartList, addItem, decrementItem,
  } = props;

  const existCartItem = () => {
    const searchedItem = cartList.filter((item) => item.product._id === location.state._id);
    const cartItem = searchedItem[0] || null;
    if (cartItem) {
      return (
        <>
          <button type="button" onClick={() => addItem(location.state)}>+</button>
          <p>{cartItem.size}</p>
          <button type="button" onClick={() => decrementItem(location.state)}>-</button>
        </>
      );
    }
    return null;
  };

  const {
    name, image, description, madeUp, ranking, price,
  } = (location && location.state) || {};
  return (
    <div className="item container">
      <div className="item__image">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: 'Wristwatch by Ted Baker London',
              // isFluidWidth: true,
              src: image,
              width: 300,
              height: 250,
            },
            largeImage: {
              src: image,
              width: 1800,
              height: 1200,
            },
          }}
        />
      </div>
      <div className="item__data">
        <h2>{name}</h2>
        <div className="item__ranking">
          <span>this product is : </span>
          <ReactStars
            count={5}
            value={ranking}
            size={24}
            color2="#ffd700"
            edit={false}
          />
          <span>stars</span>
        </div>
        <h4>{`US$ ${price}`}</h4>
        <h3>{description}</h3>
        <p>{`Manufacturer date: ${madeUp}`}</p>
        <div className="item__data-operations">
          {existCartItem()}
        </div>
        <button type="button" className="item__data-add" onClick={() => addItem(location.state)}>
          Add to cart
        </button>
        <Link to="/checklist" className="item__data-buy">
          Buy now
        </Link>
      </div>
    </div>
  );
}

const itemCartList = {
  size: PropTypes.number.isRequired,
  product: {
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    madeUp: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ranking: PropTypes.number.isRequired,
  },
};
const item = {
  state: {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    madeUp: PropTypes.string.isRequired,
  },
};
Item.propTypes = {
  location: PropTypes.shape(item).isRequired,
  cartList: PropTypes.arrayOf(itemCartList).isRequired,
  addItem: PropTypes.func.isRequired,
  decrementItem: PropTypes.func.isRequired,
};
