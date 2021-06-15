import React from 'react';
import './Promo.css';

function Promo() {
  return (
    <section className="description">
      <div className="container">
        <div className="description__body">

          <h1 className="description__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="description__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>

          <a href="#about" className="description__button">Узнать больше</a>

          <div className="description__image"></div>

        </div>
      </div>
    </section>
  );
}

export default Promo;
