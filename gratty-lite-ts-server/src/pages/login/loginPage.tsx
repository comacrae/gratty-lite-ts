import React from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export default function loginPage() {
  const { loginWithRedirect, isLoading } = useAuth0();

  return (
    <>
      <div>
        <h1>Login Page</h1>
      </div>
      {isLoading ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              loginWithRedirect();
            }}
          >
            Log In
          </button>
        </div>
      )}
    </>
  );
}
