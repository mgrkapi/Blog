import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import {useState} from "react";
import '../src/style/main.scss';
import PostPage from './pages/PostPage';
import About from "./pages/About";
import Items from "./pages/Items";
import NavBar from "../src/components/NavBar";
import React from "react";



function App() {
    //function that says if the user is logged in or not
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));


    return (
        <Router>
           <NavBar setIsAuth={setIsAuth} isAuth={isAuth}/>

            <Routes>
                <Route path="/" element={<Home isAuth={isAuth} />}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/post/:id" element={<PostPage/>}/>
                <Route path="/post/:id/posts/:category" element={<Items/>}/>
                <Route path="/posts/:category" element={<Items/>}/>
                <Route path="/createpost" element={<CreatePost isAuth={isAuth} />}/>
                {/*// passing a state as a prop to the login component*/}
                <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
            </Routes>
        </Router>
    )
}

export default App;
