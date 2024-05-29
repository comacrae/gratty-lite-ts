import { Redirect } from "wouter";
import Root from "../Root";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";

export default function ProfilePage() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  if (isLoading)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );

  if (!isAuthenticated) {
    console.log("Finished loading and not authenticated");
    return <Redirect to="/login?from=profile" />;
  }

  return (
    <Root>
      <Container>
        <h1>Profile</h1>
        <p>{user!!.username}</p>
      </Container>
    </Root>
  );
}
