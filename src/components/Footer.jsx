import React from 'react'
import { FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";


const Footer = () => {

    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-content">
                    <div>
                        <h4>Top Gear Rent</h4>
                        <p>© All rights reserved, 2023</p>
                    </div>
                    <div>
                        <p>Terms of use</p>
                        <p>Privacy policy</p>
                    </div>
                    <div className='text-end'>
                        <p>Social media:</p>
                        <div className="icons">
                            <FaTwitter />
                            <FaInstagram />
                            <FaTelegram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer