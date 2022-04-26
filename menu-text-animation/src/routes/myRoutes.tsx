// add all your routes here
import { Home } from "../pages/Home";

export const routes: RouteType[] = [
  {
    path: "/",
    element: <Home />,
    key: "home",
  },
  {
    path: "/about",
    element: <Home />,
    key: "about",
  },
  {
    path: "/services",
    element: <Home />,
    key: "services",
  },
  {
    path: "/team",
    element: <Home />,
    key: "team",
  },
  {
    path: "/contact",
    element: <Home />,
    key: "contact",
  },
];
