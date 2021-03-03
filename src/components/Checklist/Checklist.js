import React from 'react';

export default function Checklist() {
  return (
    <div className="checklist">
      <div className="checklist__main">
        <div className="checklist__news">
          <h2>Cart (2)</h2>
          <span>Sent free via AlliExpress Direct for combined orders.</span>
        </div>
        <div className="checklist__list">
          <div className="checklist__header">
            <label className="checklist__select-all">
              <input type="checkbox" />
            </label>
            <span>Manufacturer Direct Store</span>
            <span>Contacto</span>
          </div>
          <ul className="checklist__content">
            <div className="checklist__select">
              <label><input type="checkbox" /></label>
            </div>
            <div className="checklist__item">
              <img src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg" />
              <div className="checklist__item-content">
                M11 jogos de esportes eletrônicos rgb streamer cavalo correndo luminoso usb com fio computador 1600dpi computador portátil mouse ambas as mãos
              </div>
            </div>
            <div className="checklist__options">
              <button>+</button>
              <button>-</button>
              <button>delete</button>
              <button>like</button>
            </div>
          </ul>
        </div>
      </div>
      <div className="checklist__right">
        <h2>Order Resume</h2>
        <div>
          <p>Subtotal</p>
          <p>$ 106,86</p>
        </div>
        <div>
          <p>Envio</p>
          <p>$ 13,46</p>
        </div>
        <div className="checklist__right-total">
          <p>Total</p>
          <p>$ 120,29</p>
        </div>
        <button type="button">Comprar(3)</button>
      </div>
    </div>
  );
}
