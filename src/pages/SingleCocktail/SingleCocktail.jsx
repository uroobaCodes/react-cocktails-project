import Loading from "../../components/Loading/Loading";
import { useParams, NavLink } from "react-router-dom";
import styles from "./singlecocktail.module.css";
import { useEffect, useState } from "react";

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    async function fetchSingleCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        if (!response.ok) {
          setLoading(false);
          throw new Error("Network error");
        }
        const data = await response.json();
        const { drinks } = data;
        // if we didnt destructure the drinks from data, we would access properties
        // like this: const { property } = data.drinks[0]
        if (drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newSingleCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          // here, ingredients is an array
          // console.log(newSingleCocktail);
          setCocktail(newSingleCocktail);
        } else {
          setCocktail([]);
        }
        // set loading to false after edge case OR after we get something back
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchSingleCocktail();
  }, [id]);

  // load the loading component when loading is true above
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className={styles["no-cocktail"]}>No cocktail to display!</h2>;
  }
  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className={styles["cocktail-section"]}>
      {/* go home link */}
      <NavLink to="/" className={styles["go-home-btn"]}>
        go home
      </NavLink>

      {/* drink title */}
      <h2 className={styles.title}>{name}</h2>

      {/* drink container */}
      <div className={styles["drink-parent"]}>
        <img src={image} alt={name} />

        {/* drink info child */}
        <div className={styles["drink-info"]}>
          <p>
            <span className={styles["drink-data"]}>name: </span>
            {name}
          </p>
          <p>
            <span className={styles["drink-data"]}>category: </span>
            {category}
          </p>
          <p>
            <span className={styles["drink-data"]}>info: </span>
            {info}
          </p>
          <p>
            <span className={styles["drink-data"]}>glass: </span>
            {glass}
          </p>
          <p>
            <span className={styles["drink-data"]}>instructions: </span>
            {instructions}
          </p>
          <p>
            <span className={styles["drink-data"]}>ingredients: </span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
