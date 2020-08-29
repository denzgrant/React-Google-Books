import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto" style={{ color: "#0F9D58" }}> Google Books </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className={window.location.pathname === "/books" ? "nav-item active" : "nav-item"} href="/books" style={{ color: "#4285F4" }}>Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={window.location.pathname === "/books/:id" ? "nav-item active" : "nav-item"} href="/books/:id" style={{ color: "#F4B400" }}>Saved</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;