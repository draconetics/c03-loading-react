/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from 'react-load-image';
import Loading from './Loading';
import ProductService from '../services/ProductService';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    ProductService.getAll()
      .then((resp) => {
        setProductList(resp.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const Preloader = () => (<Loading />);
  return (
    <>
      <ul className="product-list container">
        {productList
          && productList.map((item) => (
            <li className="product-list__item" key={item._id}>
              <div className="product-list__image">
                <ImageLoader src={item.image}>
                  <img alt={item.name} src={item.image} />
                  <div>Error!</div>
                  <Preloader />
                </ImageLoader>
              </div>
              <div className="product-list__data">
                <h2>{item.name}</h2>
                <h3>{item.description}</h3>
                <p>{item.madeUp}</p>
                <Link
                  className="btn btn-primary"
                  to={{
                    pathname: '/item',
                    state: item,
                  }}
                >
                  Details
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ProductList;
