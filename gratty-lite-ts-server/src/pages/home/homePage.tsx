import * as React from "react";
import { Redirect } from "wouter";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "wouter";
import Root from "../Root";
import { RedirectContext } from "../../components/RedirectContext";
import { RedirectContextType } from "../../@types/redirect";

export default function HomePage() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const redirContext = React.useContext(RedirectContext) as RedirectContextType;
  const { redirect, saveRedirect } = redirContext;
  if (isLoading) return <h1>Loading</h1>;

  if (redirect && isAuthenticated) {
    const redirPath: string = redirect;
    saveRedirect("/home");
    return <Redirect to={redirPath} />;
  }

  return user && isAuthenticated ? (
    <Root>
      <p>{user.username}</p>
    </Root>
  ) : (
    <Root>
      <p>Not logged in</p>
      <Link to="/login">Login Page</Link>
    </Root>
  );
}
