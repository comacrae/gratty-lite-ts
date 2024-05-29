import { useContext } from "react";
import { RedirectContext } from "../../components/RedirectContext";
import { RedirectContextType } from "../../@types/redirect";
import { useAuth0 } from "@auth0/auth0-react";
import { useSearch } from "wouter";
import Root from "../Root";

function getPageContents() {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();
  console.log(isLoading, isAuthenticated);
  const redirectContext = useContext(RedirectContext) as RedirectContextType;
  const { saveRedirect } = redirectContext;
  const params = new URLSearchParams(useSearch());
  console.log(params.get("from"));
  if (!!params.get("from")) {
    const redirPath = params.get("from");
    saveRedirect(!!redirPath ? redirPath : "/home");
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </>
  );
}

export default function LoginPage() {
  return <Root>{getPageContents()}</Root>;
}
