import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image from '../../assets/images/gallery.jpg';
import './Gallery.modules.css'

const Gallery = () => {
    return (
        <section className="gallery">
            <h1>GALLERY</h1>
            <div className="slider">
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    autoFocus={true}
                    interval={7000}
                    showStatus={false}
                >
                    <div>
                        <img src={image} alt='' />
                    </div>
                    <div>
                        <img src={image} alt='' />
                    </div>
                    <div>
                        <img src={image} alt='' />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default Gallery;