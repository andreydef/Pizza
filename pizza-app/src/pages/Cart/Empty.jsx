import React from 'react';
import { Link } from 'react-router-dom';
import CartEmptyImg from '../../assets/img/empty-cart.png';

const Empty = () => {
  return (
    <React.Fragment>
      <h2>
        Корзина пуста <icon>😕</icon>
      </h2>
      <p>
        Ймовірно, ви ще не замовляли піццу
        <br />
        Для того, щоб замовити піццу, перейдіть на головну сторінку.
      </p>
      <img src={CartEmptyImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Повернутись назад</span>
      </Link>
    </React.Fragment>
  );
};

export default Empty;