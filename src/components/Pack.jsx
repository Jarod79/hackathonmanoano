import React from "react";

const Pack = ({ name, picture }) => {
  return (
    <div className="pack">
      <div className="pack__container">
        <img className="pack__container__img" src={picture} alt={name} />
      </div>

      <div className="pack__desc">
        <h4 className="pack__desc__title">{name}</h4>
        <h3 className="pack__desc__price">200€</h3>
      </div>
    </div>
  );
};

export default Pack;
