/*import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import SubscriptionPlans from "./Pages/SubscriptionPlans";
import Auth from "./Pages/Auth";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/SubscriptionPlans", element: <SubscriptionPlans /> },
  { path: "/auth" , element: <Auth/>}
]);

export default function App() {
  return <RouterProvider router={router} />;
}
*/

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import SubscriptionPlans from "./Pages/SubscriptionPlans";
import Auth from "./Pages/Auth";
import Login from "./components/Login";
import RiderRegistration from "./Pages/RiderRegistration";
import PassengerRegistration from "./Pages/PassengerRegistration";
import Dashboard from "./Pages/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/SubscriptionPlans", element: <SubscriptionPlans /> },
  { path: "/auth", element: <Auth /> },
  { path: "/rider", element: <RiderRegistration /> },
  { path: "/passenger", element: <PassengerRegistration /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
