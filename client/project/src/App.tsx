import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout.tsx";
import About from "./pages/About.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import HomePage from "./pages/HomePage.tsx";
import Profile from "./pages/Profile.tsx";
import Error from "./pages/Error.tsx";
import { useEffect } from "react";
import { isUserValid } from "./utils/api.service.ts";
import { setUser } from "./store/slices/userSlice.ts";
import { useAppDispatch } from "./store/index.ts";
import EditProfile from "./components/EditProfile.tsx";
import Yourpost from "./pages/Yourpost.tsx";
import FilterPost from "./pages/FilterPost.tsx";
import Nog from "./pages/Chat.tsx";
import Chat from "./pages/Chat.tsx";
import DonationPage from "./pages/DonationPage.tsx";
import VolunteerSection from "./pages/Volunter.tsx";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    //IIFE
    (async () => {
      const dataAuth = await isUserValid();

      if (dataAuth.userLogout) {
        dispatch(setUser({ role: "guest" }));
      } else {
        dispatch(setUser(dataAuth));
      }
    })();
  }, []);

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
          path: "/EditProfile",
          element: <EditProfile />,
        },
        {
          path: "/yourpost",
          element: <Yourpost />,
        },
        {
          path: "/FilterPost/",
          element: <FilterPost />,
        },
        {
          path: "/Volunter",
          element: <VolunteerSection />

        },
        {
          path: "/Donantion",
          element: <DonationPage />

        },
        {
          path: "/Chat",
          element: <Chat />

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

  return <RouterProvider router={router} />;
}

export default App;
