import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";
//import About from "./components/About"; using from lazy loading
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const About = lazy(() => import("./components/About")); // chunking, lazyLoading

const FoodMart = lazy(() => import("./components/FoodMart")); //lazy loading

const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  const [user, setuser] = useState({
    name: "Ankit",
    email: "abc@gmail.com",
  });

  return (
    <Provider store={store}>
      <userContext.Provider value={user}>
        <Header />
        <Outlet />
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Restaurant/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/FoodMart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <FoodMart />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
