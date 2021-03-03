import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';
import { isEmptyObject } from '../utils';

export default function Item(props) {
  console.log(props);
  const {
    location = {}, cartList, addItem, decrementItem,
  } = props;
  if (isEmptyObject(location) || !location.state || isEmptyObject(location.state)) {
    return <Redirect to="/" />;
  }
  const ratingChanged = (newRating) => {
    console.log(newRating);
    alert(`this product is ${newRating} stars`);
  };

  const {
    name, image, description, madeUp,
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
            onChange={ratingChanged}
            size={24}
            color2="#ffd700"
          />
          <span>stars</span>
        </div>
        <h3>{description}</h3>
        <p>{madeUp}</p>
        <button type="button" onClick={() => addItem(location.state)}>
          Add to cart
        </button>
        <button type="button" onClick={() => decrementItem(location.state)}>
          delete item
        </button>
        {JSON.stringify(cartList)}
      </div>
    </div>
  );
}

const item = {
  state: {
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    madeUp: PropTypes.string,
  },
};
Item.propTypes = {
  location: PropTypes.shape(item).isRequired,
};
