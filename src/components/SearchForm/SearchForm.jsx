import { useGlobalContext } from "../../context";
import { useEffect, useRef, useState } from "react";
import styles from "./searchform.module.css";

//  ***** UNCONTROLLED FORM *****
//  with focus
// with default prevention

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef(null);

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className={`${styles.section} ${styles.search}`}>
      <form className={styles["search-form"]} onSubmit={handleSubmit}>
        <div className={styles["form-control"]}>
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

// ****** CONTROLLED FORM INPUT WITHOUT (NO) SUBMIT BUTTON ******
//  with focus

// const SearchForm = () => {
//   const { setSearchTerm } = useGlobalContext();
//   const [searchVal, setSearchVal] = useState("");
//   const inputElement = useRef(null);

//   // focus
//   useEffect(() => {
//     inputElement.current.focus();
//   }, []);
//   // prevent default submit on enter
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   const searchCocktail = (e) => {
//     setSearchVal(e.target.value);
//     setSearchTerm(e.target.value);
//   };
//   return (
//     <section className={`${styles.section} ${styles.search}`}>
//       <form className={styles["search-form"]} onSubmit={handleSubmit}>
//         <div className={styles["form-control"]}>
//           <label htmlFor="name">search your favorite cocktail</label>
//           <input
//             type="text"
//             id="name"
//             value={searchVal}
//             onChange={searchCocktail}
//             ref={inputElement}
//           />
//         </div>
//       </form>
//     </section>
//   );
// };

// export default SearchForm;

// ****** CONTROLLED FORM INPUT WITH SUBMIT BUTTON ******
//with focus

// const SearchForm = () => {
//   const { setSearchTerm } = useGlobalContext();
//   const [searchVal, setSearchVal] = useState("");
//   const inputElement = useRef(null);

//   useEffect(() => {
//     inputElement.current.focus();
//   }, []);

//   const searchCocktail = (e) => {
//     setSearchVal(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!searchVal) {
//       return;
//     }
//     setSearchTerm(searchVal);
//   };
//   return (
//     <section className={`${styles.section} ${styles.search}`}>
//       <form className={styles["search-form"]} onSubmit={handleSubmit}>
//         <div className={styles["form-control"]}>
//           <label htmlFor="name">search your favorite cocktail</label>
//           <input
//             type="text"
//             id="name"
//             value={searchVal}
//             onChange={searchCocktail}
//             ref={inputElement}
//           />
//         </div>
//         <button type="submit" className={styles["form-submit-btn"]}>
//           submit
//         </button>
//       </form>
//     </section>
//   );
// };

// export default SearchForm;
