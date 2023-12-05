import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const Hero = () => {

    const [name, setName] = useState()
    const [location, setLocation] = useState()
    const [model, setModel] = useState()
    const [phone, setPhone] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const clickHandler = (e) => {
        if (!name && !location && !model && !phone) {
            e.preventDefault()
            alert('Please, fill in the form.')
        } else {
            handleShow()
        }
    }

    return (
        <div id='home'>
            <div className="container">
                <h1 className='mb-5'>
                    Drive Your Adventure: Explore the World with Seamless Car Rentals – Your Gateway to Comfort and Convenience!
                </h1>
                <p className='mb-5'>
                    Book Now for an Unforgettable Ride! Your Dream Car Awaits – Reserve Today and Hit the Road in Style!
                </p>
                <div className="form mb-5">
                    <input type="text" placeholder='Full Name' onChange={e => setName(e.target.value)} />
                    <select name="" id="" onChange={e => setLocation(e.target.value)}>
                        <option value="">Location</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="San Francisco">San Francisco</option>
                    </select>
                    {/* <input type="text" placeholder='Location' /> */}
                    <input type="text" placeholder='Model' onChange={e => setModel(e.target.value)} />
                    <input type="text" placeholder='Phone' onChange={e => setPhone(e.target.value)} />
                    <button className='prime-btn' onClick={clickHandler}>
                        Submit
                    </button>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Request Is Sent!</Modal.Title>
                </Modal.Header>
                <Modal.Body>We will contact you within 15 minutes!</Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose} className='prime-btn'
                        style={{ border: '1px solid white', backgroundColor: 'grey', color: 'white', fontWeight: 600 }}
                    >
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Hero