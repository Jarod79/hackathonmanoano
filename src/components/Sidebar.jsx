import { useState, useEffect } from "react";
import axios from "axios";

const Sidebar = () => {
  const [categorySelected, setCategorySelected] = useState("");
  const [subcategorySelected, setSubcategorySelected] = useState("");
  const [categoriesList, setCategoriesList] = useState([]);
  const [subcategoriesList, setSubcategoriesList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/categories`)
      .then((res) => setCategoriesList(res.data));
    axios
      .get(`http://localhost:4000/api/subcategories`)
      .then((res) => setSubcategoriesList(res.data));
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <h2 className="sidebar__container__h2">
          Trouvez le pack répondant à vos envies
        </h2>
        <div className="siderbar__container__item">
          <label
            className="sidebar__container__item__label"
            htmlFor="categories"
          >
            Sélectionnez une catégorie :
          </label>
          <select
            onChange={(e) => {
              setCategorySelected(e.target.value);
            }}
            value={categorySelected}
            className=""
            name="categories"
            id="categories"
          >
            <option value="">Votre projet</option>
            {categoriesList.length &&
              categoriesList.map((category, index) => (
                <option key={index} value={category.id_category}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <div className="sidebar__item">
          <label htmlFor="categories">Précisez-nous votre besoin :</label>
          {subcategoriesList.length &&
            subcategoriesList
              .filter(
                (subcategory) => subcategory.id_category == categorySelected
              )
              .map((subcategory, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={subcategory.id_category}
                    name="check"
                    value={subcategory.name}
                    onChange={() =>
                      setSubcategorySelected(!subcategorySelected)
                    }
                  />
                  <label for={subcategory.id_category}>
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
