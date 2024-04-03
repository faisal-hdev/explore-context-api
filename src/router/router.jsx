import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import AllMovies from "../components/AllMovies";
import App from "../App";
import Banner from "../components/Banner";
import TopMoviees from "../components/TopMoviees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/banner", element: <Banner /> },
      { path: "/allMovies", element: <AllMovies /> },
      { path: "/topMovies", element: <TopMoviees /> },
    ],
  },
]);

export default router;
