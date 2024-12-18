import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout.jsx";
import About from "./pages/about.jsx"
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import HomePage from "./pages/HomePage.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <Layout  />,
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
          path: "/userProfile/:id",
          element: <Profile />,
        },
        {
          path: "/change-password",
          element: <ChangePassword />,
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
    // {
    //   path: "/error",
    //   element: <ErrorPage />,
    // },
    // {
    //   path: "/contactUs",
    //   element: <ContactUs />,
    // },
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