import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./pages/Layout.jsx";
import Login from "./pages/Login.jsx";
// import SignUp from "./pages/SignUp.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <Layout isLogIn={isLogIn} setIsLogIn={setIsLogIn} />,
      // children: [
      //   {
      //     path: "/",
      //     element: <HomePage isLogIn={isLogIn} setIsLogIn={setIsLogIn} />,
      //   },
      //   {
      //     path: "/createPost",
      //     element: <CreatePost />,
      //   },
      //   {
      //     path: "/userProfile/:id",
      //     element: <UserProfile />,
      //   },
      //   {
      //     path: "/change-password",
      //     element: <ChangePassword />,
      //   },
      // ],
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
