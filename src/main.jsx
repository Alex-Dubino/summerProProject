import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./style/index.scss";
import firebaseConfig from "../firebaseConfig.js";
import Spa from "./Pages/Spa/Spa.jsx";
import Activities from "./Pages/Activities/Activities.jsx";
import Contacts from "./Pages/Contacts/Contacts.jsx";
import Room from "./Components/Room/Room.jsx";
import { initializeApp } from "firebase/app";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/spa", element: <Spa /> },
  { path: "/activities", element: <Activities /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/rooms", element: <Room />},
]);
initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
