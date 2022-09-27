import React from "react";
import SideBar from "../components/SideBar";
import Post from "../components/Post";

function Home() {
    return (
        <div className= "home-container">
            <SideBar/>
            <Post/>
        </div>
    )
}

export default Home;