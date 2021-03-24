import React from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';



function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <div className="myNav container">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="/">버츄얼엔트리</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="secondary">Search</Button>
                    </Form>
                    <Nav className="flex-shrink-1">
                    <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavBar;