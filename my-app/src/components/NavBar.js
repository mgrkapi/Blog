import React from 'react';
import {useState} from "react";
import {signOut} from "firebase/auth";
import {auth} from "../firebase";
import logo from "../pictures/logo.png";
import {Link} from "react-router-dom";
import "../style/navbar.scss";

function NavBar() {
    //function that says if the user is logged in or not
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

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
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About me</Link>
            </div>

            <div className="nav-login">

                {/*//if user is logged in, don't show login lin, just show log out button*/}
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