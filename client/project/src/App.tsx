import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout.tsx";
import About from "./pages/about.tsx";

import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import HomePage from "./pages/HomePage.tsx";
import Profile from "./pages/Profile.tsx";
import Error from "./pages/Error.tsx";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Profile/:id",
          element: <Profile />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
  ]);

  return (
    <>
      <h1>
        <RouterProvider router={router} />
      </h1>
    </>
  );
}

export default App;
