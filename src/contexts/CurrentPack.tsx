import React, { createContext, useState } from "react";

type Props = { children: Element };

const CurrentPackContext = createContext({
  idCategory: {},
  setIdCategory: () => {},
  idSubCategory: {},
  setIdSubCategory: () => {},
});

export const CurrentPackContextProvider: React.FC<Props> = ({ children }) => {
  const [idCategory, setIdCategory] = useState();
  const [idSubCategoey, setIdSubCategory] = useState();

  return (
    <CurrentPackContext.Provider
      value={{
        idCategory,
        setIdCategory,
        idSubCategoey,
        setIdSubCategory,
      }}
    >
      {children}
    </CurrentPackContext.Provider>
  );
};

export default CurrentPackContext;
