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

  console.log(subcategoriesList);
  console.log(categorySelected);

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <h2>Composez votre pack</h2>
        <div className="siderbar__item">
          <label htmlFor="categories">Selectionnez votre categorie</label>
          <select
            onChange={(e) => setCategorySelected(e.target.value)}
            value={categorySelected}
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
          <select
            onChange={(e) => setSubcategorySelected(e.target.value)}
            value={subcategorySelected}
            className=""
            name="subcategory"
            id="categories"
          >
            {subcategoriesList.length &&
              subcategoriesList
                .filter(
                  (subcategory) => subcategory.id_category == categorySelected
                )
                .map((subcategory, index) => (
                  <option key={index} value={subcategory.id_subcategory}>
                    {subcategory.name}
                  </option>
                ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
