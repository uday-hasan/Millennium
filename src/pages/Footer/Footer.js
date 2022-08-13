import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Footer.modules.css';
import { TbMessage2 } from 'react-icons/tb';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <h1>PARTNER</h1>
            <section className="contact">
                <Carousel
                    showIndicators={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={10000}
                    showStatus={false}
                >
                    <div className='circle-container'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <div className='circle-container'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <div className='circle-container'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                </Carousel>
            </section>
            <section className="location">
                <div className="msg-btn">
                    <TbMessage2 />
                </div>
                <div className="offices">
                    <div>
                        <div className='location-details' id='contact'>
                            <h2>HEAD OFFICE(UNITED KINGDOM)</h2>
                            <p>AVICENNA HOUSE</p>
                            <p>(1ST FLOOR) 258-282 ROMFORD, FOREST GATE,</p>
                            <p>LONDON</p>
                            <p>CONTACT:020 8581 2773</p>
                            <p>E-MAIL : INFO@MILLENNIUMINSTITUTE.UK</p>
                            <p>OFFICE HOUR: </p>
                            <p>SATURDAY - THURSDAY: 10:00AM - 6:30PM</p>
                        </div>
                        <div className="location-btn">
                            <button>CONTACT NOW</button>
                        </div>

                    </div>
                    <div>
                        <div>
                            <h2>ROMANIA OFFICE</h2>
                            <p>CONTACT:020 8581 2773</p>
                            <p>OFFICE HOUR: </p>
                            <p>SATURDAY - THURSDAY: 10:00AM - 6:30PM</p>
                        </div>
                        <div className="location-btn">
                            <button>CONTACT NOW</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>NIGERIA OFFICE</h2>
                            <p>CONTACT:020 8581 2773</p>
                            <p>OFFICE HOUR: </p>
                            <p>SATURDAY - THURSDAY: 10:00AM - 6:30PM</p>
                        </div>
                        <div className="location-btn">
                            <button>CONTACT NOW</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>BANGLADESH OFFICE</h2>
                            <p>CONTACT:020 8581 2773</p>
                            <p>OFFICE HOUR: </p>
                            <p>SATURDAY - THURSDAY: 10:00AM - 6:30PM</p>
                        </div>
                        <div className="location-btn">
                            <button>CONTACT NOW</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>SINGAPUR OFFICE</h2>
                            <p>CONTACT:020 8581 2773</p>
                            <p>OFFICE HOUR: </p>
                            <p>SATURDAY - THURSDAY: 10:00AM - 6:30PM</p>
                        </div>
                        <div className="location-btn">
                            <button>CONTACT NOW</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>INDIA OFFICE</h2>
                            <p>CONTACT:020 8581 2773</p>
                            <p>OFFICE HOUR: </p>
                            <p>SATURDAY - THURSDAY: 10:00AM - 6:30PM</p>
                        </div>
                        <div className="location-btn">
                            <button>CONTACT NOW</button>
                        </div>
                    </div>
                </div>
                <div className="social-contact">
                    <ul>
                        <li><a href='/#'><FaFacebook /></a></li>
                        <li><a href='/#'><FaInstagram /></a></li>
                        <li><a href='/#'><FaTwitter /></a></li>
                        <li><a href='/#'><FaTiktok /></a></li>
                    </ul>
                </div>
                <hr />
                <div className="footer-end">
                    <small>MADE BY</small>
                    <div>
                        <p><a href="https://uday-hasan-portfolio.web.app/">UDAY HASAN</a></p>
                        <p>WEB DEVELOPER</p>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;