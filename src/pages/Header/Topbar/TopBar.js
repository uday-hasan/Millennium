import React from 'react';
import { FaUserGraduate } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import './TopBar.modules.css'

const TopBar = () => {
    return (
        <section>
            <section className="top-bar">
                <div><FaUserGraduate /></div>
                <div>
                    <h2>MILLENNIUM</h2>
                    <p><small>INSTITUTE</small></p>
                </div>
            </section>
            <section className="social-contact">
                <ul>
                    <li><a href='/#'><FaFacebook /></a></li>
                    <li><a href='/#'><FaInstagram /></a></li>
                    <li><a href='/#'><FaTwitter /></a></li>
                    <li><a href='/#'><FaTiktok /></a></li>
                </ul>
            </section>
        </section>
    );
};

export default TopBar;