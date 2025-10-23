import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/SIgnup";
import MyProfile from "../Pages/MyProfile";
import ErrorPage from "../Pages/ErrorPage";
import RootLayout from "../Layouts/RootLayout";
import SkillDetails from "../Pages/SkillDetails";
import Skills from "../Pages/Skills";
import ForgetPassword from "../Pages/ForgetPassword";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/skill/:skillId",
        element: (
          <PrivateRoute>
            <SkillDetails></SkillDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
]);

export default router;
