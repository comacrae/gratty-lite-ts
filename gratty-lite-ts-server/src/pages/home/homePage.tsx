import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "wouter";
import Root from "../Root";

export default function HomePage() {
  const { user, isAuthenticated, logout } = useAuth0();
  if (user && isAuthenticated) {
    console.log(user);
    if (user.logins_count >= 1)
      axios.post("http://localhost:8081/api/users", { userID: user.sub });
  }
  return user && isAuthenticated ? (
    <Root>
      <p>{user.nickname}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <button onClick={() => logout()}></button>
    </Root>
  ) : (
    <Root>
      <p>Not logged in</p>
      <Link to="/login">Login Page</Link>
    </Root>
  );
}
