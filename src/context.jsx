import { useState, createContext, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

// create context
const AppContext = createContext();

// custom use context hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// context provider
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);

      if (!response.ok) {
        setLoading(false);
        throw new Error("Network request failed");
      }

      const data = await response.json();
      const { drinks } = data;

      // edge case if drinks data is null
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        // console.log(newCocktails);
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      // set loading to false after edge case OR after we get something back
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerm,
        setSearchTerm,
        cocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
