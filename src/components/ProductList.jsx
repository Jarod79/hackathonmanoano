import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  // const [cart, setCart] = useState([]);
  const [allPrice, setAllPrice] = useState([]);
  const [idSubCategory, setSubCategory] = useState(3);
  const [hideShow, setHideShow] = useState(true);
  // const [on, setOn] = useState(true);

  const sum = allPrice.reduce((sum, a) => sum + a, 0);
  console.log(sum);

  useEffect(() => {
    productList
      .filter((el) => el.id_subcategory === idSubCategory)
      .map((el) => setAllPrice(el.price));
  }, [productList]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products/packs/1")
      .then((res) => setProductList(res.data));
  }, []);
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
                .filter((el) => el.id_subcategory === idSubCategory)
                .map((el, index) => (
                  <div className="product__back__card" key={index}>
                    {/* <input
                      type="checkbox"
                      name={el.name}
                      defaultValue={el}
                      defaultChecked
                      checked={on}
                      onChange={(e) => {
                        setCart(e.target.checked ? el : undefined);
                        setOn(!on);
                      }}
                    /> */}
                    <img src={el.picture} alt={el.name} />
                    <p className="product__back__card__paragraph1">{el.name}</p>
                    <p className="product__back__card__paragraph1">
                      {el.price}
                    </p>
                  </div>
                ))}
            {allPrice && (
              <div className="product__back__total">
                <button>
                  <Link to="/cart">Valider la commande</Link>
                </button>
                <p>TOTAL: {allPrice} </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
