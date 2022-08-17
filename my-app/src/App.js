import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import {useState} from "react";
import {signOut} from "firebase/auth";
import {auth} from "./firebase";

function App() {
    //function that says if the user is logged in or not
    const[isAuth, setIsAuth] = useState(false);


    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/login";
        })
    }
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/createPost">Post</Link>
                {/*//if user is logged in, don't show login lin, just show log out button*/}
                {!isAuth ? <Link to="/login">Login</Link> : <button onClick={signUserOut}>Log Out</button>}
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/createpost" element={<CreatePost/>}/>
                {/*// passing a state as a prop to the login component*/}
                <Route path="/login" element={<Login setIsAuth = {setIsAuth}/>}/>
            </Routes>
        </Router>
    )
}

export default App;
