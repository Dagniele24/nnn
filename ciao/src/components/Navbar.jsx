import React from 'react';
import { Navbar, Nav, Dropdown , Form, FormControl, Button, Image } from 'react-bootstrap';
import MyImage from '../assets/netflix_logo.png';
import MyImage2 from '../assets/kids_icon.png';
import MyImage3 from '../assets/avatar.png';
const MyNavbar = () => {
    return (
        <Navbar bg="" expand="lg">
            <Navbar.Brand href="#">
                <Image src={MyImage} alt="logo" width="120px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                    <Nav.Link href="#" className="text-white" active>Home</Nav.Link>
                    <Nav.Link href="#" className="text-white">TV Shows</Nav.Link>
                    {/* dropdown MOVIES */}
                    <Dropdown>
                    <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='text-white'>
                        Movies
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    
                    <Nav.Link href="#" className="text-white" disabled>Recently Added</Nav.Link>
                </Nav>

                <Form className="d-flex align-items-center mx-2">
                    <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
                </Form>
                <Image src={MyImage2} alt="kids" width="30px" className="rounded-2 mx-2" />
                <div className="btn-group">
                    <Button variant="dropdown-toggle" className="rounded-0 mx-2 text-white ">
                        <Image src={MyImage3} alt="alt" width="40px" />
                    </Button>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;