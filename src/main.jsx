import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  Home,
  Login,
  ForgotPassword,
  FAQDetails,
  EoDBReport,
  LayoutSketch,
  ListConsultant,
  SlaTimeline,
  Signup,
  ArchDashboard,
} from "./pages/pages.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/consultant" element={<ListConsultant />} />
      <Route path="/SLADetails" element={<SlaTimeline />} />
      <Route path="/EoDBReport" element={<EoDBReport />} />
      <Route path="/FAQDetails" element={<FAQDetails />} />
      <Route path="/LayoutSearch" element={<LayoutSketch />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/ArchDashboard" element={<ArchDashboard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);