import profile from "../pictures/profile.jpg";
import "../style/sidebar.scss";
import instagram from "../pictures/instagram.png";
import {Link} from "react-router-dom";

function SideBar() {

    return (
                <div className="side-bar">
                    <div className="side-bar__content">
                        <img className="side-bar__picture" src={profile} alt="profile"/>
                        <div className="side-bar__header">Welcome <br/> to my travel blog!</div>
                        <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Lorem ipsum dividend adip tempor
                        </article>
                        <div className="side-bar__Item">
                            <span className="side-bar__title">DESTINATIONS</span>
                            <ul className="side-bar__list">
                                <Link to={`items/Warsaw`}>
                                    <li className= "side-bar__listItem">Warsaw</li>
                                </Link>
                                <Link to={`items/Poland`}>
                                    <li className= "side-bar__listItem">Poland</li>
                                </Link>
                                <Link to={`items/Europe`}>
                                    <li className= "side-bar__listItem">Europe</li>
                                </Link>
                                <Link to={`items/World`}>
                                    <li className= "side-bar__listItem">World</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="side-bar__Item">
                            <span className="side-bar__title">FOLLOW ME</span>
                            <img className="side-bar__icon" src={instagram} alt="instagram icon"/>
                        </div>
                    </div>
                </div>
            )
        }

    export default SideBar;