import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/user.context.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 5000,
            style: {
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
              fontSize: "1rem",
              padding: "1em",
              borderRadius: ".75rem",
            },
          }}
        />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
