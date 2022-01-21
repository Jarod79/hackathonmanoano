import { useContext, useEffect } from "react";
import CurrentPackContext from "../contexts/CurrentPack";
import axios from "axios";

const Cart = () => {
  const { idPack, products } = useContext(CurrentPackContext);

  useEffect(() => {
    idPack != undefined &&
      axios
        .get(`http://localhost:4000/api/products/packs/${idPack}`)
        .then((res) => setProductList(res.data));
  }, []);

  return (
    <div className="cart">
      <h2 className="cart__title">Votre panier</h2>
      {products &&
        products.map((product) => (
          <div className="cart__product" key={product.id_product}>
            <img className="cart__img" src={product.picture} />
            <div className="cart__center">
              <h2 className="cart__product_name">{product.name}</h2>
              <button className="cart__delete_item">Supprimer</button>
            </div>
            <div className="cart__quantity_price">
              <div className="cart__add">
                <button className="cart__plus1">-</button>
                <input type="text" placeholder="1" />
                <button className="cart__moins1">+</button>
              </div>
              <label className="cart__total_price">{product.price}€</label>
            </div>
          </div>
        ))}
      <div className="cart__total"></div>
    </div>
  );
};

export default Cart;
