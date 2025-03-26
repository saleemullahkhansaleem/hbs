import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import "@fontsource/poppins";
import {
  About,
  Careers,
  CollegesLayout,
  ContactUs,
  FacultyBDS,
  FacultyMBBS,
  Home,
  HomeMDC,
  News,
  NotFound,
  Programs,
  QEC,
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
            path: "faculty-mbbs",
            element: <FacultyMBBS />,
          },
          {
            path: "faculty-bds",
            element: <FacultyBDS />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "programs",
        element: <Programs />,
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
        path: "careers",
        element: <Careers />,
      },
      {
        path: "qec",
        element: <QEC />,
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
