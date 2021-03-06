/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from 'react-load-image';
import ReactStars from 'react-stars';
import Loading from '../components/Loading';
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
                <p>
                  <ReactStars
                    count={5}
                    value={item.ranking}
                    size={24}
                    color2="#ffd700"
                    edit={false}
                  />
                </p>
                <h3>{`US$ ${item.price}`}</h3>
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
