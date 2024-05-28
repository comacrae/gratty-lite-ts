import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-czpoxsfpa1nsna0e.us.auth0.com"
    clientId="ONP7g4MKcxHfxjTRmcmiFAsdx7N8rwA9"
    authorizationParams={{ redirect_uri: "http://localhost:5173/home" }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
