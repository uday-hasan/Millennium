import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image from '../../assets/images/banner.jpg';
import './Banner.modules.css';


const Banner = () => {
    return (
        <div className="carousel-container">
            <Carousel
                interval={6000}
                showArrows={true}
                autoPlay={true}
                showStatus={false}
                stopOnHover={false}
                showThumbs={false}
                infiniteLoop={true}
                showIndicators={false}
            >
                <div className='carousel-content'>
                    <img src={image} alt='' />
                    <div className="carousel-heading">
                        <h1>MILLENNIUM INSTITUTE UK</h1>
                        <h1>MOST EXPERIENCED</h1>
                        <h1>EDUCATION CONSULTANCY FIRM</h1>
                        <button className='btn'>APPLY NOW</button>
                    </div>
                    <div className="carousel-text">
                        <h1>WELCOME TO MILLENNIUM INSTITUTE UK</h1>
                        <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ipsam maxime recusandae quos quo. Accusamus quis, corrupti adipisci quasi doloribus minus maiores nemo itaque iure sint enim, repellendus modi dolorum amet vel accusantium doloremque sit. Ratione placeat consequuntur quod excepturi molestias, esse, a sint reprehenderit nulla necessitatibus, tenetur id. In minima optio officia doloremque, temporibus aliquid quae magnam ut beatae quaerat qui officiis, ullam illum, debitis nesciunt non sequi odit sunt maxime veritatis. Rem expedita tenetur voluptas nobis, ipsa beatae sapiente quaerat consequatur nostrum repellat architecto nam corporis ipsum similique iste optio odio accusamus cupiditate asperiores suscipit blanditiis. Ut earum neque odit quam nesciunt blanditiis omnis reiciendis natus vero veritatis accusamus, ea debitis! Asperiores, officia a? Sit iusto illum quis veritatis sunt corrupti quam aliquid nam eius voluptatibus, iure ab a adipisci ea? Aliquid minima alias voluptatibus cupiditate consectetur eum perspiciatis quia, ratione expedita, excepturi commodi sapiente inventore aliquam voluptates similique, et facilis blanditiis. Est reiciendis libero debitis ex animi assumenda praesentium iure quo, esse corporis optio voluptatibus, nisi consectetur voluptatem, quidem quos aliquid ipsam tempore! Pariatur molestiae saepe in ex delectus nostrum facere asperiores ipsa molestias corporis quaerat blanditiis eius, consequatur animi eum, laborum sit! Placeat quasi neque incidunt.</small></p>
                    </div>
                </div>
                <div className='carousel-content'>
                    <img src={image} alt='' />
                    <div className="carousel-heading">
                        <h1>MILLENNIUM INSTITUTE UK</h1>
                        <h1>MOST EXPERIENCED</h1>
                        <h1>EDUCATION CONSULTANCY FIRM</h1>
                        <button className='btn'>APPLY NOW</button>
                    </div>
                    <div className="carousel-text">
                        <h1>WELCOME TO MILLENNIUM INSTITUTE UK</h1>
                        <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ipsam maxime recusandae quos quo. Accusamus quis, corrupti adipisci quasi doloribus minus maiores nemo itaque iure sint enim, repellendus modi dolorum amet vel accusantium doloremque sit. Ratione placeat consequuntur quod excepturi molestias, esse, a sint reprehenderit nulla necessitatibus, tenetur id. In minima optio officia doloremque, temporibus aliquid quae magnam ut beatae quaerat qui officiis, ullam illum, debitis nesciunt non sequi odit sunt maxime veritatis. Rem expedita tenetur voluptas nobis, ipsa beatae sapiente quaerat consequatur nostrum repellat architecto nam corporis ipsum similique iste optio odio accusamus cupiditate asperiores suscipit blanditiis. Ut earum neque odit quam nesciunt blanditiis omnis reiciendis natus vero veritatis accusamus, ea debitis! Asperiores, officia a? Sit iusto illum quis veritatis sunt corrupti quam aliquid nam eius voluptatibus, iure ab a adipisci ea? Aliquid minima alias voluptatibus cupiditate consectetur eum perspiciatis quia, ratione expedita, excepturi commodi sapiente inventore aliquam voluptates similique, et facilis blanditiis. Est reiciendis libero debitis ex animi assumenda praesentium iure quo, esse corporis optio voluptatibus, nisi consectetur voluptatem, quidem quos aliquid ipsam tempore! Pariatur molestiae saepe in ex delectus nostrum facere asperiores ipsa molestias corporis quaerat blanditiis eius, consequatur animi eum, laborum sit! Placeat quasi neque incidunt.</small></p>
                    </div>
                </div>
                <div className='carousel-content'>
                    <img src={image} alt='' />
                    <div className="carousel-heading">
                        <h1>MILLENNIUM INSTITUTE UK</h1>
                        <h1>MOST EXPERIENCED</h1>
                        <h1>EDUCATION CONSULTANCY FIRM</h1>
                        <button className='btn'>APPLY NOW</button>
                    </div>
                    <div className="carousel-text">
                        <h1>WELCOME TO MILLENNIUM INSTITUTE UK</h1>
                        <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ipsam maxime recusandae quos quo. Accusamus quis, corrupti adipisci quasi doloribus minus maiores nemo itaque iure sint enim, repellendus modi dolorum amet vel accusantium doloremque sit. Ratione placeat consequuntur quod excepturi molestias, esse, a sint reprehenderit nulla necessitatibus, tenetur id. In minima optio officia doloremque, temporibus aliquid quae magnam ut beatae quaerat qui officiis, ullam illum, debitis nesciunt non sequi odit sunt maxime veritatis. Rem expedita tenetur voluptas nobis, ipsa beatae sapiente quaerat consequatur nostrum repellat architecto nam corporis ipsum similique iste optio odio accusamus cupiditate asperiores suscipit blanditiis. Ut earum neque odit quam nesciunt blanditiis omnis reiciendis natus vero veritatis accusamus, ea debitis! Asperiores, officia a? Sit iusto illum quis veritatis sunt corrupti quam aliquid nam eius voluptatibus, iure ab a adipisci ea? Aliquid minima alias voluptatibus cupiditate consectetur eum perspiciatis quia, ratione expedita, excepturi commodi sapiente inventore aliquam voluptates similique, et facilis blanditiis. Est reiciendis libero debitis ex animi assumenda praesentium iure quo, esse corporis optio voluptatibus, nisi consectetur voluptatem, quidem quos aliquid ipsam tempore! Pariatur molestiae saepe in ex delectus nostrum facere asperiores ipsa molestias corporis quaerat blanditiis eius, consequatur animi eum, laborum sit! Placeat quasi neque incidunt.</small></p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;