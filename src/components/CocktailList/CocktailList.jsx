import Cocktail from "../Cocktail/Cocktail";
import Loading from "../Loading/Loading";
import styles from "./cocktaillist.module.css";
import { useGlobalContext } from "../../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2>No Cocktails matched your search query</h2>;
  }
  return (
    <section className={styles.section}>
      <h2 className={styles["section-title"]}>Cocktails</h2>
      <div className={styles["cocktails-center"]}>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
