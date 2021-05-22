import React from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MyNavbar = ({ links, dropdown }) => {
  return (
    <Navbar
      collapseOnSelect={true}
      variant="dark"
      bg="dark"
      expand="md"
      className="px-0"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {links?.map((link) => (
              <Nav.Link
                as={NavLink}
                key={link.href}
                to={link.href}
                exact
                className="ml-4"
              >
                {link.title}
              </Nav.Link>
            ))}
            {dropdown && (
              <NavDropdown title={dropdown.title}>
                {dropdown.items.map((item) => (
                  <NavDropdown.Item
                    as={NavLink}
                    key={item.href}
                    to={item.href}
                    exact
                  >
                    {item.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
