import CocktailList from "../../components/CocktailList/CocktailList";
import SearchForm from "../../components/SearchForm/SearchForm";
import styles from "./home.module.css";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
