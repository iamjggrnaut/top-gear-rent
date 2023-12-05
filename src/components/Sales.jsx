import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import sale1 from '../assets/sale1.jpg'
import sale2 from '../assets/sale2.jpg'
import sale3 from '../assets/sale3.jpg'

const Sales = () => {

    return (
        <div id='sales'>
            <div className="container">
                <h3 className='mb-5'>Our Best Offers</h3>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img src={sale1} alt="" />
                    <Carousel.Caption>
                        <h3>Mercedes-AMG GT</h3>
                        <p>
                            Unleash pure driving exhilaration with the Mercedes-AMG GT, a high-performance masterpiece that combines stunning design with breathtaking speed. This sports car is meticulously crafted for enthusiasts, boasting a powerful engine, precision handling, and a luxurious interior. The AMG GT captivates with its sleek lines, distinctive grille, and aerodynamic profile. From the track to the open road, experience the perfect fusion of style and performance. Elevate your driving experience with the Mercedes-AMG GT – where every curve becomes a thrill and every ride is a statement of pure automotive passion.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sale2} alt="" />
                    <Carousel.Caption>
                        <h3>Mercedes-Benz GLE</h3>
                        <p>
                            Introducing the Mercedes-Benz GLE, a harmonious blend of power, elegance, and versatility. This luxury SUV redefines driving pleasure with its dynamic performance, cutting-edge technology, and spacious interior. Experience the road with confidence, courtesy of advanced safety features, and revel in the GLE's sleek design that seamlessly merges style and substance. Whether conquering city streets or venturing off-road, the Mercedes-Benz GLE promises a journey where every moment is elevated to extraordinary heights.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sale3} alt="" />
                    <Carousel.Caption>
                        <h3>Mercedes-Benz</h3>
                        <p>
                            Discover unparalleled luxury and performance with Mercedes-Benz. Our vehicles epitomize elegance, cutting-edge technology, and precision engineering. From the iconic G-Class SUV to the sophisticated E-Class sedans, each model represents the pinnacle of automotive craftsmanship. Immerse yourself in a world of comfort, safety, and innovation, where every drive is a celebration of refined style and driving excellence. Choose Mercedes-Benz – where the legacy of luxury meets the thrill of the road.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Sales