import React from "react";

const Pack = ({ title, picture, price }) => {
  return (
    <div className="pack">
      <div className="pack__container">
        <img className="pack__container__img" src={picture} alt={title} />
      </div>

      <div className="pack__desc">
        <h3 className="pack__desc__title">{title}</h3>
        <h3 className="pack__desc__price">{price}€</h3>
      </div>
    </div>
  );
};

export default Pack;
