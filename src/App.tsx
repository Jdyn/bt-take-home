import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Browse from "./views/Browse";
import Profile from "./views/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "browse", element: <Browse /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
