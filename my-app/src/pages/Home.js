import React from "react";
import SideBar from "../components/SideBar";
import Post from "../components/Post";

function Home(isAuth) {

    return (
        <div className= "home-container">
            <SideBar/>
            <Post isAuth={isAuth}/>
        </div>
    )
}

export default Home;