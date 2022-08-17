import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.modules.css';

const Navbar = () => {
    const [show, setShow] = React.useState(false)
    return (
        <nav>
            <button onClick={() => setShow(!show)}>X</button>
            <ul className={show ? 'show' : 'hide'}>
                <li><HashLink to='/#'>Home</HashLink></li>
                <li><HashLink to='/'>About Us</HashLink></li>
                <li><HashLink to='/#services'>Services</HashLink></li>
                <li><HashLink to='/'>Education Consultancy</HashLink></li>
                <li><HashLink to='/'>Scholarships: Register Now</HashLink></li>
                <li><HashLink to='/#contact'>Contact Us</HashLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;