import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import "@fontsource/poppins";
import {
  About,
  CollegesLayout,
  ContactUs,
  Home,
  HomeMDC,
  News,
  NotFound,
  Team,
} from "./pages";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "colleges/mdc",
        element: <CollegesLayout />,
        children: [
          {
            path: "",
            element: <HomeMDC />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
  </StrictMode>
);
