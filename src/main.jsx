import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Scorepage from "./Scorepage.jsx";
import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "score",
    element: <Scorepage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
