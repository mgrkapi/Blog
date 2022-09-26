// import React, {useEffect, useState} from 'react';
// import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
// import {auth, db} from "../firebase";
// import "../style/home.scss";

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