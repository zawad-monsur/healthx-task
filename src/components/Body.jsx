import React from 'react'
import BannerImage from "../assets/body-bg.png"
import '../components/BodyStyles.css'

function Body() {
    return (

        <div className="image-with-details">
            <div className="details">
                <h1>Protect Your Health And Take Care of Your Health</h1>
                
                <ul id="cards" >
                    <li>
                        <ul>
                            <li>
                                <h4>Make An Appointment</h4>
                                <p>Schedule With Your Favorite Doctor</p>
                            </li>
                                <h4>Health Guarantee Forever</h4>
                                <p>We Alaways Provide The Best Warranty For You</p>
                            <li>

                            </li>
                        </ul>
                    </li>

                    <li>
                        <ul>
                            <li>
                                <h4>Find Your Best Doctor</h4>
                            <p>We Alaways Provide The Best Warranty For You</p>
                            </li>

                            <li>
                                <h4>Spread in Various Places</h4>
                            <p>Now Clinics Are Available in various places</p>
                            </li>
                        </ul>
                    </li>
                </ul>
    
                <button>Book Now</button>
            </div>

            <div className="image">
                <img src={BannerImage} alt="Image" />
            </div>
        </div>
    );
};
 

export default Body