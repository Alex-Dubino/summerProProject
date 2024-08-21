import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./style/index.scss";
import firebaseConfig from "../firebaseConfig.js";
import Activities from "./Pages/Activities/Activities.jsx";
import Contacts from "./Pages/Contacts/Contacts.jsx";
import PaymentPage from "./Pages/PaymentPage/PaymentPage.jsx";
import PaymentSuccessfulPage from "./Pages/PaymentSuccessfulPage/PaymentSuccessfulPage.jsx";
import Room from "./Components/Room/Room.jsx";
import { initializeApp } from "firebase/app";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookingPage from "./Pages/BookingPage/BookingPage.jsx";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/activities", element: <Activities /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/rooms", element: <Room /> },
  { path: "/booking", element: <BookingPage /> },
  { path: "/payment", element: <PaymentPage /> },
  { path: "/paymentsucsful", element: <PaymentSuccessfulPage /> },
]);
initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
