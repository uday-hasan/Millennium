import React from 'react';
import './Services.modules.css';
import { FiUsers } from 'react-icons/fi'
import { FaUniversity, FaHandsHelping, FaHandshake } from 'react-icons/fa'
import { AiOutlineSetting } from 'react-icons/ai'


const Services = () => {
    return (
        <section className="services" id='services'>
            <h1>OUR SERVICES</h1>
            <div className='service-items-container'>
                <div>
                    <div>
                        <span className="icon"><FiUsers /></span>
                        <h3>Free Counselling</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolores quis, earum non et harum tempora sint iste recusandae nihil veniam suscipit unde maiores? Rem, est. Porro odit repellendus tenetur doloribus temporibus alias dicta aut debitis quod voluptatibus libero quidem facilis voluptates excepturi, praesentium ullam quos. Libero reprehenderit dolor, quae similique dolorem voluptatem labore assumenda sunt numquam vero? Amet, aliquid!</p>
                </div>
                <div>
                    <div>
                        <span className="icon"><FaUniversity /></span>
                        <h3>Admission Services</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolores quis, earum non et harum tempora sint iste recusandae nihil veniam suscipit unde maiores? Rem, est. Porro odit repellendus tenetur doloribus temporibus alias dicta aut debitis quod voluptatibus libero quidem facilis voluptates excepturi, praesentium ullam quos. Libero reprehenderit dolor, quae similique dolorem voluptatem labore assumenda sunt numquam vero? Amet, aliquid!</p>
                </div>
                <div>
                    <div>
                        <span className="icon"><FaHandsHelping /></span>
                        <h3>Compliance Assistance</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolores quis, earum non et harum tempora sint iste recusandae nihil veniam suscipit unde maiores? Rem, est. Porro odit repellendus tenetur doloribus temporibus alias dicta aut debitis quod voluptatibus libero quidem facilis voluptates excepturi, praesentium ullam quos. Libero reprehenderit dolor, quae similique dolorem voluptatem labore assumenda sunt numquam vero? Amet, aliquid!</p>
                </div>
                <div>
                    <div>
                        <span className="icon"><FaHandshake /></span>
                        <h3>Partner University</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolores quis, earum non et harum tempora sint iste recusandae nihil veniam suscipit unde maiores? Rem, est. Porro odit repellendus tenetur doloribus temporibus alias dicta aut debitis quod voluptatibus libero quidem facilis voluptates excepturi, praesentium ullam quos. Libero reprehenderit dolor, quae similique dolorem voluptatem labore assumenda sunt numquam vero? Amet, aliquid!</p>
                </div>
                <div>
                    <div>
                        <span className="icon"><AiOutlineSetting /></span>
                        <h3>End-to-End Services</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolores quis, earum non et harum tempora sint iste recusandae nihil veniam suscipit unde maiores? Rem, est. Porro odit repellendus tenetur doloribus temporibus alias dicta aut debitis quod voluptatibus libero quidem facilis voluptates excepturi, praesentium ullam quos. Libero reprehenderit dolor, quae similique dolorem voluptatem labore assumenda sunt numquam vero? Amet, aliquid!</p>
                </div>

            </div>
            <div className="box-services">
                <div className="box-container">
                    <div className="box"></div>
                    <p className="box-text">FIND A UNIVERSITY</p>
                </div>
                <div className="box-container">
                    <div className="box"></div>
                    <p className="box-text">FIND A COURSE</p>
                </div>
                <div className="box-container">
                    <div className="box"></div>
                    <p className="box-text">FIND A SCHOLARSHIP</p>
                </div>
                <div className="box-container">
                    <div className="box"></div>
                    <p className="box-text">APPLICATION PROCESS</p>
                </div>
            </div>
        </section>
    );
};

export default Services;