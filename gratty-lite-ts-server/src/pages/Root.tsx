import * as React from "react";
import GrattyNavbar from "../components/GrattyNavbar";
import { Container } from "react-bootstrap";

interface ComponentProps {
  children: React.ReactNode;
}
const Root: React.FC<ComponentProps> = ({ children }) => {
  return (
    <Container fluid>
      <GrattyNavbar />
      {children}
    </Container>
  );
};

export default Root;
