import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "wouter";

export default function homePage() {
  const { user, isAuthenticated, logout } = useAuth0();
  if (isAuthenticated && user) {
    axios.post("http://localhost:8081/api/users", { userID: user.sub });
  }
  return user && isAuthenticated ? (
    <>
      <p>{user.nickname}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <button onClick={() => logout()}></button>
    </>
  ) : (
    <>
      <p>Not logged in</p>
      <Link to="/login">Login Page</Link>
    </>
  );
}
