import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';
import ChecklistItem from './ChecklistItem';
import { sum } from '../utils';

export default function Checklist({ cartList, history }) {
  console.log('checklist render');
  const costSending = 35;
  const getSubTotal = () => {
    let subTotal = 0;
    cartList.map((item) => {
      subTotal += item.product.price * item.size;
      return item;
    });
    return subTotal;
  };

  const buy = () => {
    if (cartList.length === 0) {
      alert('first select something to buy');
      return history.push('/');
    }
    alert('please login');
  };

  return (
    <div className="checklist">
      <div className="checklist__main">
        <div className="checklist__news">
          <h2>Cart ({sum(cartList)})</h2>
          <span>
            <FontAwesomeIcon icon={faPlane} />
            Sent free via AlliExpress Direct for combined orders.
          </span>
        </div>
        <div className="checklist__list">
          <div className="checklist__header">
            <label className="checklist__select-all">
              <input type="checkbox" />
            </label>
            <span>Manufacturer Direct Store</span>
            <span>Contacto</span>
          </div>
          {cartList &&
            cartList.map((item) => (
              <ChecklistItem item={item} key={item.product._id} />
            ))}
          {cartList && cartList.length === 0 ? <div>List is empty</div> : null}
        </div>
      </div>
      <div className="checklist__right">
        <h2>Order Resume</h2>
        <div>
          <p>Subtotal</p>
          <p>US$ {getSubTotal()}</p>
        </div>
        <div>
          <p>Envio</p>
          <p>US$ {costSending}</p>
        </div>
        <div className="checklist__right-total">
          <p>Total</p>
          <p>$ {getSubTotal() + costSending}</p>
        </div>
        <button type="button" onClick={() => buy()}>
          Comprar({sum(cartList)})
        </button>
      </div>
    </div>
  );
}
