import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CurrentPackContext from "../contexts/CurrentPack";
import axios from "axios";

const ProductList = () => {
  const [hideShow, setHideShow] = useState(true);
  const [productList, setProductList] = useState([]);
  const { idPack, setProducts, products } = useContext(CurrentPackContext);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/products/packs/${idPack}`)
      .then((res) => {
        setProductList(res.data);
        setProducts(res.data);
      });
  }, []);

  let pack1 = [];
  pack1 = productList.filter((product) => product.id_subcategory === idPack);
  let pack1Price = [];
  pack1Price = pack1.map((product) => Number(product.price));
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  pack1Price = pack1Price.reduce(reducer, 0);

  const handleClick = () => {
    setHideShow(false);
  };

  return (
    <>
      {hideShow && (
        <div className="product">
          <div
            className="product__background"
            onClick={() => handleClick()}
            onKeyPress={() => handleClick()}
            role="button"
            tabIndex={0}
          ></div>
          <div className="product__back">
            <div
              className="product__back__hide"
              onClick={() => handleClick()}
              onKeyPress={() => handleClick()}
              role="button"
              tabIndex={0}
            >
              &times;
            </div>
            {productList.length &&
              productList
                .filter((el) => el.id_subcategory === idPack)
                .map((el, index) => (
                  <div className="product__back__card" key={index}>
                    <img src={el.picture} alt={el.name} />
                    <p className="product__back__card__paragraph">{el.name}</p>
                    <p className="product__back__card__paragraph">
                      {el.price}€
                    </p>
                  </div>
                ))}

            <div className="product__back__total">
              <button>
                <Link to="/cart">Valider la commande</Link>
              </button>
              <p>TOTAL: {pack1Price}€ </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
