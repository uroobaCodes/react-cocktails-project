import { RouterProvider } from "react-router-dom";
import Navbar from "../src/components/NavBar/NavBar";
import router from "./Router";
import "./app.css";

function App() {
  return (
    <>
      <RouterProvider router={router}>{/* <Navbar /> */}</RouterProvider>
    </>
  );
}

export default App;
