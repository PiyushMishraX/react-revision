import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import C, { Context } from './Context.jsx' 
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Context>
      <App />
    </Context>
    </BrowserRouter>
  </StrictMode>,
);
