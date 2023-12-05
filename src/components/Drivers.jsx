import React, { useEffect, useState } from 'react'
import data from '../data.json'
import driver1 from '../assets/driver1.jpg'
import driver2 from '../assets/driver2.jpg'
import driver3 from '../assets/driver3.jpg'

const Drivers = () => {

    const [active, setActive] = useState()
    useEffect(() => {
        setActive(data?.chauffeurs[0])
    }, [])

    const getImage = (name) => {
        switch (name) {
            case 'Alex Reynolds':
                return driver2
            case 'Marcus Mitchell':
                return driver1
            case 'Dominic Turner':
                return driver3
            default: return driver1
        }
    }

    return (
        <div id='drivers'>
            <div className="container">
                <div className="driver-list">
                    {
                        data?.chauffeurs?.map((driver, index) => (
                            <p key={index} className={active && active.name === driver.name ? "driver active" : 'driver'}
                                onClick={e => setActive(driver)}
                            >
                                {driver.name}
                            </p>
                        ))
                    }
                </div>
                <div className="driver-info">
                    <img src={getImage(active?.name)} alt="" />
                    <div className="driver-info-text">
                        <h4>{active?.name}</h4>
                        <p>{active?.experience}</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <a href='#home' className='prime-btn'>Book</a>
            </div>
        </div>
    )
}

export default Drivers