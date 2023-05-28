import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Profile from "./Profile";

export function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{ textDecoration: "none", marginRight: "40px" }}>
            <Navbar.Brand>
              <i className="fa-solid fa-book-open-reader"></i>&nbsp; StudyBuddy
            </Navbar.Brand>
          </Link>
          <Nav>
            <Profile />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
