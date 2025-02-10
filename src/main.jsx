import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import "@fontsource/poppins";
import {
  About,
  ContactUs,
  Courses,
  Donate,
  DSSS,
  Friends,
  Home,
  News,
  NotFound,
  Performance,
  Policies,
  Programmes,
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
        path: "programmes",
        element: <Programmes />,
      },
      {
        path: "dsss",
        element: <DSSS />,
      },
      {
        path: "performance",
        element: <Performance />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "policies",
        element: <Policies />,
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
        path: "courses",
        element: <Courses />,
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
