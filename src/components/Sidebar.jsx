import { useState, useEffect, useContext } from "react";
import CurrentPackContext from "../contexts/CurrentPack";
import axios from "axios";

const Sidebar = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [subcategoriesList, setSubcategoriesList] = useState([]);

  const { idCategory, setIdCategory, idSubCategory, setIdSubCategory } =
    useContext(CurrentPackContext);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/categories`)
      .then((res) => setCategoriesList(res.data));
    axios
      .get(`http://localhost:4000/api/subcategories`)
      .then((res) => console.log(setSubcategoriesList(res.data)));
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <h2 className="sidebar__container__h2">Composez votre pack</h2>
        <div className="siderbar__container__item">
          <label
            className="sidebar__container__item__label"
            htmlFor="categories"
          >
            Selectionnez votre categorie
          </label>
          <select
            onChange={(e) => setIdCategory(e.target.value)}
            value={idCategory}
            className=""
            name="categories"
            id="categories"
          >
            <option value="">---</option>
            {categoriesList.length &&
              categoriesList.map((category, index) => (
                <option key={index} value={category.id_category}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <div className="siderbar__item">
          <label htmlFor="categories">
            Dites nous ce dont vous avez besoin
          </label>
          {subcategoriesList.length &&
            subcategoriesList
              .filter((subcategory) => subcategory.id_category == idCategory)
              .map((subcategory, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={subcategory.id_subcategory}
                    name="check"
                    value={subcategory.id_subcategory}
                    onChange={(e) => setIdSubCategory(e.target.value)}
                  />
                  <label for={subcategory.id_subcategory}>
                    {subcategory.name}
                  </label>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
