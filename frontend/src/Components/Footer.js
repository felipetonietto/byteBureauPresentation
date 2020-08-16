import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper"></div>
        <footer className="footer">
          <Navbar expand="md" bg="dark" variant="dark" className="mt-5">
            <Navbar.Brand href="/">Bitcoin</Navbar.Brand>
          </Navbar>
        </footer>
      </>
    );
  }
}

export default Footer;
