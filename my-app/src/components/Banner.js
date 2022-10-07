import React from 'react';
import banner from "../pictures/banner.JPG";

function Banner() {
    return (
            <div className= "banner">
                <h1 className = "banner-title">Blond Podróże</h1>
                <img className = "banner-image" src={banner} alt="banner"/>
            </div>
            )
}

export default Banner;