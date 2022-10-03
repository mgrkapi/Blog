import React from "react";
import SideBar from "../components/SideBar";
import Post from "../components/Post";
import {useLocation} from "react-router-dom";

function Home(isAuth) {

    return (
        <div className= "home-container">
            <SideBar/>
            <Post isAuth={isAuth}/>
        </div>
    )
}

export default Home;