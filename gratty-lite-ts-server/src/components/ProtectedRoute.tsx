import * as React from "react";
import { Redirect } from "wouter";
import { useAuth0 } from "@auth0/auth0-react";
import Root from "../pages/Root";
interface ComponentProps {
  children: React.ReactNode;
  redirectPath: string;
}
const ProtectedPage: React.FC<ComponentProps> = ({
  redirectPath,
  children,
}) => {
  const isAuthenticated: boolean = useAuth0().isAuthenticated;
  if (!isAuthenticated) {
    return <Redirect to={redirectPath}></Redirect>;
  }
  return <Root>{children}</Root>;
};

export default ProtectedPage;
