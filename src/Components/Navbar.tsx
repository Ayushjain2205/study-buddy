import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{ textDecoration: "none", marginRight: "40px" }}>
            <Navbar.Brand>StudyBuddy</Navbar.Brand>
          </Link>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </>
  );
}
