import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
