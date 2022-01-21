import React, { createContext, useState } from "react";

const CurrentPackContext = createContext({
  idCategory: {},
  setIdCategory: () => {},
  idSubCategory: {},
  setIdSubCategory: () => {},
});

export const CurrentPackContextProvider = ({ children }) => {
  const [idCategory, setIdCategory] = useState();
  const [idSubCategory, setIdSubCategory] = useState();

  return (
    <CurrentPackContext.Provider
      value={{
        idCategory,
        setIdCategory,
        idSubCategory,
        setIdSubCategory,
      }}
    >
      {children}
    </CurrentPackContext.Provider>
  );
};

export default CurrentPackContext;
