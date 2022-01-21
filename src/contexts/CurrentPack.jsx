import React, { createContext, useState, useEffect } from "react";

const CurrentPackContext = createContext({
  idCategory: {},
  setIdCategory: () => {},
  idSubCategory: {},
  setIdSubCategory: () => {},
  idPack: {},
  setIdPack: () => {},
  products: {},
  setProducts: () => {},
});

export const CurrentPackContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [idCategory, setIdCategory] = useState();
  const [idSubCategory, setIdSubCategory] = useState();
  const [idPack, setIdPack] = useState();

  return (
    <CurrentPackContext.Provider
      value={{
        idCategory,
        setIdCategory,
        idSubCategory,
        setIdSubCategory,
        idPack,
        setIdPack,
        products,
        setProducts,
      }}
    >
      {children}
    </CurrentPackContext.Provider>
  );
};

export default CurrentPackContext;
