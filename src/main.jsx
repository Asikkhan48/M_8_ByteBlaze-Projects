import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import MainLayouts from "./Layouts/MainLayouts";
import Blogs from "./Pages/Blogs";
import Bookmarks from "./Pages/Bookmarks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path:"/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);