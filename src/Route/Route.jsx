import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Profile from "../Component/Profile";
import Subscription from "../Component/Subscription";
import ChoiceSubs from "../Component/ChoiceSubs";
import ViewPlan from "../pages/ViewPlan";
import PlanSection from "../pages/PlanSection";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import Review from "../pages/Review";
import Rateing from "../pages/Rateing";
import NotFound from "../pages/NotFound";
import About from "../pages/About";

const route = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },

  {
    path: "/profile",
    element: <Profile></Profile>,
  },

  {
    path: "/subscription",
    element: <Subscription></Subscription>,
    loader: () => fetch("/ClubName.json"),
  },

  {
    path: "viewPlan/:id",
    element: (
      <PrivateRoute>
        <ViewPlan></ViewPlan>
      </PrivateRoute>
    ),
    loader: () => fetch("/SubscriptionCardData.json"),
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
export default route;
