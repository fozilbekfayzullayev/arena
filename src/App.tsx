import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import BattleArena from "./pages/BattleArena";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/battle", element: <BattleArena /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
