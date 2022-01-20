import { useState } from "react";

const [category, setCategory] = useState("");
const [categoriesList, setCategoriesList] = useState([]);

useEffect(() => {
  axios
    .get("http://localhost:4000/categories")
    .then((res) => res.data)
    .then((data) => setCategoriesList(data));
}, []);

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <h2>Composez votre pack</h2>
        <div className="siderbar__item">
          <label htmlFor="categories">Selectionnez votre categorie</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className=""
            name="categories"
            id="categories"
          >
            <option value="">---</option>
            {categoriesList &&
              categoriesList.map((category, index) => (
                <option key={index} value={category.id_category}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
