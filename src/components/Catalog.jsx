import React from 'react'
import car1 from '../assets/car1.jpg'
import car2 from '../assets/car2.jpg'
import car3 from '../assets/car3.jpg'
import car4 from '../assets/car4.jpg'
import car5 from '../assets/car5.jpg'
import car6 from '../assets/car6.jpg'

const Catalog = () => {

    return (
        <div id='catalog'>
            <div className="container">

                <h2 className='mb-5'>
                    Your Road, Your Rules: Discover Top Gear Rent, Your Trusted Partner for Affordable and Reliable Car Rentals. We Make Every Journey Memorable – Experience the Freedom to Explore Hassle-Free!
                </h2>
                <p className="description">
                    Embark on a journey of convenience and affordability with Top Gear Rent. As your trusted car rental partner, we deliver budget-friendly solutions without compromising on reliability. Whether it's a weekend getaway or an extended road trip, we provide vehicles to suit every need. Our commitment is to make your travel experience seamless, ensuring you focus on the joy of exploration. Choose Top Gear Rent for reliable, affordable, and unforgettable journeys – where the road becomes your own canvas, and every mile is an adventure waiting to unfold.
                </p>

                <div className="car-row">
                    <div className="car-item">
                        <img src={car1} alt="" />
                        <p className="title">Mercedes-AMG GT</p>
                        <p className="subtitle">
                            Sleek. Powerful. Thrilling
                        </p>
                    </div>
                    <div className="car-item">
                        <img src={car2} alt="" />
                        <p className="title">Mercedes-AMG GT</p>
                        <p className="subtitle">
                            Performance. Precision. Elegance
                        </p>
                    </div>
                    <div className="car-item">
                        <img src={car3} alt="" />
                        <p className="title">Mercedes-AMG GT</p>
                        <p className="subtitle">
                            Dynamic. Stylish. Iconic
                        </p>
                    </div>
                </div>
                <div className="car-row">
                    <div className="car-item">
                        <img src={car4} alt="" />
                        <p className="title">Mercedes-Benz G-class</p>
                        <p className="subtitle">
                            Speed. Luxury. Innovation
                        </p>
                    </div>
                    <div className="car-item">
                        <img src={car5} alt="" />
                        <p className="title">Mercedes-AMG GT</p>
                        <p className="subtitle">
                            Graceful. Potent. Unmatched
                        </p>
                    </div>
                    <div className="car-item">
                        <img src={car6} alt="" />
                        <p className="title">Mercedes-AMG GT</p>
                        <p className="subtitle">
                            Sophisticated. Agile. Masterpiece
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog