import React from 'react'
import asset1 from '../assets/asset1.png'
import asset2 from '../assets/asset2.png'
import asset3 from '../assets/asset3.png'

const Info = () => {

    return (
        <div id='info'>
            <div className="container">
                <div className="info-row">
                    <img src={asset2} alt="" />
                    <div className='info-text'>
                        <h4>Performance:</h4>
                        <ol>
                            <li>The Mercedes-AMG GT is a high-performance sports car designed for exhilarating driving experiences.</li>
                            <li>Boasts powerful engines and advanced performance features for exceptional speed and handling.</li>
                        </ol>
                    </div>
                </div>
                <div className="info-row">
                    <img src={asset1} alt="" />
                    <div className='info-text'>
                        <h4>Design:</h4>
                        <ol>
                            <li>Features a sleek and aerodynamic design that combines elegance with a sporty aesthetic.</li>
                            <li>Distinctive long hood, wide stance, and iconic diamond grille contribute to its striking appearance.</li>
                        </ol>
                    </div>
                </div>
                <div className="info-row">
                    <img src={asset3} alt="" />
                    <div className='info-text'>
                        <h4>Interior:</h4>
                        <ol>
                            <li>Crafted with a driver-centric cockpit, luxurious materials, and cutting-edge technology.</li>
                            <li>Offers a perfect blend of comfort and sportiness, providing an immersive driving environment.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info