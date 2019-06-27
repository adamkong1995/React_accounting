import React from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Header.css';

const Header = () => {
    return (
        <Navbar fixed='top' id='header' style={{backgroundColor:"rgb(44, 50, 55)"}}>
            <Breadcrumb as={Nav.Item} className='ml-2'>
                <Breadcrumb.Item href='#'>Accounting System</Breadcrumb.Item>
            </Breadcrumb>
            <Nav className='ml-auto'>
                <NavDropdown alignRight className='d-none d-md-block' title='Switch to other systems'>
                    <NavDropdown.Item href='#'>
                        Accounting System (Current)
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#1'>
                        Complinace System
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#2'>
                        HR System
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>

    );
};

export default Header;