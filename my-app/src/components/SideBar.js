import React from 'react';
import profile from "../pictures/profile.jpg";
import "../style/sidebar.scss";

function SideBar() {
    return (
        <div className="side-bar">
            <div className="side-bar__content">
                <img src={profile} alt="woman face with lake in the background"/>
                <div className="side-bar__header">Welcome to my blog</div>
                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Lorem ipsum dividend adip tempor
                </article>
            </div>
        </div>

    )
}

export default SideBar;