import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { MdPlaylistAdd, MdModeEdit, MdFileDownload, MdSettings } from 'react-icons/md';

import './SidebarMenu.css';

const SidebarMenu = () => {
    return (
        <Navbar id='sidebarMeun' className='flex-column' style={{backgroundColor: "#eeeeee"}}>
            <ul className='list-unstyled'>
                { renderFields() }
            </ul>
        </Navbar>
    );
};

const renderFields = () => {
    return _.map(sidebarFields, ({ label, link , icon }) => {
        return (
            <li key={link}>
                <Nav.Link as={Link} className='text-dark' to={link}>
                    {icon}
                    {label}
                </Nav.Link>
            </li>
        );
    });
};

const sidebarFields = [
    { label: 'Add Record', link: '/', icon: <MdPlaylistAdd /> },
    { label: 'Edit Record', link: '/edit_record', icon: <MdModeEdit /> },
    { label: 'Download CSV', link: '/report', icon: <MdFileDownload /> },
    { label: 'Manage Accounts', link: '/account', icon: <MdSettings /> }
]

export default SidebarMenu;