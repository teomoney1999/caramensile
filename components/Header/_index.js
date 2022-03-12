import { Container } from "react-bootstrap";
import Contact from "./Contact";
import Nav from "./Nav";

const Header = ({ className }) => {
  return (
    <header>
      <div style={{"borderBottom": "1px solid #f0f2f7"}}>
        <Container className="header">
          <Contact />
          {/* <Nav /> */}
        </Container>
      </div>
      <Container className="header">
        {/* <Contact /> */}
        <Nav />
      </Container>
    </header>
  );
};

export default Header;
