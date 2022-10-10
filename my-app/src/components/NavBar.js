import React from 'react';
import {useState} from "react";
import {signOut} from "firebase/auth";
import {auth} from "../firebase";
import logo from "../pictures/logo.png";
import {Link} from "react-router-dom";
import menu from "../pictures/menu.png";

function NavBar({setIsAuth, isAuth}) {
    //function that says if the user is logged in or not
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/login";
        })
    }

    return (
        <nav>
            <div className="logo">
                <Link to = "/"><img src={logo} alt="logo"/></Link>
            </div>
            <button className="hamburger"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}>
                <img className = "hamburger-icon" src={menu} alt= "Menu"/>
            </button>
            <div className= {isNavExpanded ? "menu expanded" : "menu"
            }>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to={`items/Warsaw`}>Warsaw</Link></li>
                <li><Link to={`items/Poland`}>Poland</Link></li>
                <li><Link to={`items/Europe`}>Europe</Link></li>
                <li><Link to={`items/World`}>World</Link></li>
                </ul>
            </div>
            <div className="nav-login">
                {/*//if user is logged in, don't show login link, just show log out button*/}
                {!isAuth ? (
                    <Link to="/login">Login</Link>) : (
                    <>
                        <Link to="/createPost">Post</Link>
                        <button onClick={signUserOut}>Log out</button>
                    </>
                )}
            </div>

        </nav>
    )
}

export default NavBar;