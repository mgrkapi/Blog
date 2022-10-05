import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import {useState} from "react";
import {signOut} from "firebase/auth";
import {auth} from "./firebase";
import '../src/style/main.scss';
import PostPage from './pages/PostPage';
import Items from "./pages/Items";
import About from "./pages/About";

function App() {
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
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About me</Link>

                {/*//if user is logged in, don't show login lin, just show log out button*/}
                {!isAuth ? (
                    <Link to="/login">Login</Link>) : (
                    <>
                        <Link to="/createPost">Post</Link>
                        <button onClick={signUserOut}>Log Out</button>
                    </>
                )}
            </nav>
            <Routes>
                <Route path="/" element={<Home isAuth = {isAuth} />}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/post/:id" element={<PostPage/>}/>
                <Route path="/items/:category" element={<Items />}/>
                <Route path="/createpost" element={<CreatePost isAuth={isAuth} />}/>
                {/*// passing a state as a prop to the login component*/}
                <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
            </Routes>
        </Router>
    )
}

export default App;
