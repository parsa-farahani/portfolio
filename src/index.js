import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
// components
import AppContainer from "./App";
// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
      <BrowserRouter>
         <AppContainer />
      </BrowserRouter>
);
