import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


 const NavbarRender = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="d-flex justify-content-center">
        <Navbar.Brand href="/">
          {/* <img
            alt=""
            src="../../../images/favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> */}
          HOME
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default NavbarRender;
