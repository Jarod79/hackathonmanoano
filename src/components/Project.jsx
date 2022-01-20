import React, { useEffect, useState } from "react";
import Pack from "./Pack";
import axios from "axios";

const Project = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/categories")
      .then((categorie) => categorie.data)
      .then((categories) => setCategories(categories));
  }, []);

  console.log(categories);
  return (
    <div>
      {categories &&
        categories.map((categorie) => {
          return <Pack {...categorie} key={categorie.id_category} />;
        })}
    </div>
  );
};

export default Project;
