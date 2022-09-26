import React from 'react';
import profile from "../pictures/profile.jpg";
import "../style/sidebar.scss";
import instagram from "../pictures/instagram.png";

function SideBar() {
    return (
        <div className="side-bar">
            <div className="side-bar__content">
                <img className= "side-bar__picture" src={profile} alt="profile"/>
                <div className="side-bar__header">Welcome <br/> to my travel blog!</div>
                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Lorem ipsum dividend adip tempor
                </article>
                <div className="side-bar__Item">
                <span className= "side-bar__title">DESTINATIONS</span>
                <ul className="side-bar__list">
                    <li className= "side-bar__listItem">Warsaw</li>
                    <li className= "side-bar__listItem">Poland</li>
                    <li className= "side-bar__listItem">Europe</li>
                    <li className= "side-bar__listItem">World</li>
                </ul>
                </div>
                <div className="side-bar__Item">
                    <span className= "side-bar__title">FOLLOW ME</span>
                    <img className= "side-bar__icon" src= {instagram} alt= "instagram icon"/>
                </div>
            </div>
        </div>

    )
}

export default SideBar;