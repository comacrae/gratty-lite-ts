import { useAuth0 } from "@auth0/auth0-react";
import { Redirect, useSearch } from "wouter";

export default function LoginPage() {
  const { loginWithRedirect, isLoading } = useAuth0();
  const urlParams: URLSearchParams = new URLSearchParams(useSearch());
  const redirectTo = urlParams.get("from");

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
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      )}
    </>
  );
}
