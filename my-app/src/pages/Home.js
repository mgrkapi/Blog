import React from "react";
import SideBar from "../components/SideBar";
import Post from "../components/Post";
import Banner from "../components/Banner";

function Home({isAuth}) {

    return (
        <div className= "home-container">
           <Banner/>
            <div className = "content">
            <Post isAuth={isAuth}/>
            <SideBar/>
            </div>
        </div>
    )
}

export default Home;