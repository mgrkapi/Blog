import React from 'react';
import {auth, provider} from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../style/login.scss";

function Login({setIsAuth}) {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        //result is holding information about the logged in user
        signInWithPopup(auth, provider).then((result) => {
            //identifier in the local storage to determine if we are logged in or not
            localStorage.setItem("isAuth", true);
            //saying that user is logged in
            setIsAuth(true)
            navigate("/"); //redirect to home page when logged in
        })
    }

    return <div className="login-page">
        <p>Sign in with Google to continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    </div>;
}

export default Login;