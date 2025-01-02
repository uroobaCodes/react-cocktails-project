import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../src/components/NavBar/NavBar";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import SingleCocktail from "../src/pages/SingleCocktail/SingleCocktail";
import Error from "../src/pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/cocktail/:id",
    element: (
      <div>
        <Navbar />
        <SingleCocktail />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Navbar />
        <Error />
      </div>
    ),
  },
]);

export default router;
