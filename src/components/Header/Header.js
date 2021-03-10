/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { sum } from '../utils';

export default function Header({ cartList }) {
  console.log(cartList);
  return (
    <nav className="header">
      <div className="header__menu-top">
        <Link to="/">
          <img src="/img/amazon.png" alt="logo-amazon" />
        </Link>
        <div className="header__send">
          Send to
          {' '}
          <b>Bolivia</b>
        </div>
        <div className="header__searcher">
          <a src="#">All</a>
          <input type="text" />
          <span><FontAwesomeIcon icon={faSearch} /></span>
        </div>
        <ul className="header__right-menu">
          <li className="header__flag">
            <img alt="united States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" />
          </li>
          <li className="header__account">
            Hello, Mario
            <p>Account & Lists</p>
          </li>
          <li className="header__orders">
            Returns
            <p>& Orders</p>
          </li>
          <li className="header__cart">
            <Link to="/checklist">
              <span>{sum(cartList)}</span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__menu-bottom">
        <span>
          <FontAwesomeIcon icon={faBars} />
        </span>
        <ul>
          <li>Daily offers</li>
          <li>Historial</li>
          <li>Mario&#39;s Amazon</li>
          <li>Client Service</li>
          <li>Buy new</li>
        </ul>
      </div>
    </nav>
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
Header.propTypes = {
  cartList: PropTypes.arrayOf(itemCartList).isRequired,
};
