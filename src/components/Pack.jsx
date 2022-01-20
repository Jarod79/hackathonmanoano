import React from "react";

const Pack = () => {
  return (
    <div className="pack">
      <div className="pack__container">
        <img
          className="pack__container__img"
          src="https://www.schelfhout.com/templates/yootheme/cache/225940-225939-226589_carrelage-interieur-sol-et-mur-57ffb646.jpeg"
          alt=""
        />
      </div>

      <div className="pack__desc">
        <h4 className="pack__desc__title">Le premier produit</h4>
        <h3 className="pack__desc__price">200€</h3>
      </div>
    </div>
  );
};

export default Pack;
