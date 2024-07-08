import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// مربوط به کانتکست هست که محصولات سبد خرید رو توی خودش نگه میداره
import { CardProvider } from "./components/Context/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CardProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CardProvider>
);
