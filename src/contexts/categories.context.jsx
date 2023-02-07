import { createContext, useState, useEffect } from "react";

// import SHOP_DATA from "../shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);
  const value = { categoriesMap, setCategoriesMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments({});
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
