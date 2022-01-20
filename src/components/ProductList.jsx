import axios from "axios";
import { useState, useEffect } from "react";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [allPrice, setAllPrice] = useState([]);
  const [idSubCategory, setSubCategory] = useState(3);
  const [hideShow, setHideShow] = useState(true);

  console.log(allPrice);
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

  return (
    <>
      {hideShow && (
        <div className="product" onClick={() => setHideShow(false)}>
          <div className="product__back">
            <p className="product__back__hide" onClick={false}>
              &times;
            </p>
            {productList.length &&
              productList
                .filter((el) => el.id_subcategory === idSubCategory)
                .map((el, index) => (
                  <div className="product__back__card" key={index}>
                    <img src={el.picture} alt={el.name} />
                    <p className="product__back__card__paragraph1">{el.name}</p>
                    <p className="product__back__card__paragraph1">
                      {el.price}
                    </p>
                  </div>
                ))}
            {allPrice && (
              <div className="product__back__total">
                <button>Valider la commande</button>
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
