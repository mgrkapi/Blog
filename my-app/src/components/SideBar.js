import profile from "../pictures/profile.jpg";
import "../style/sidebar.scss";
import instagram from "../pictures/instagram.png";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import {Link} from "react-router-dom";

function SideBar() {

    const [categories, setCategories] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setCategories(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getPosts();
    }, []);


    return (
                <div className="side-bar">
                    <div className="side-bar__content">
                        <img className="side-bar__picture" src={profile} alt="profile"/>
                        <div className="side-bar__header">Welcome <br/> to my travel blog!</div>
                        <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Lorem ipsum dividend adip tempor
                        </article>
                        <div className="side-bar__Item">
                            <span className="side-bar__title">DESTINATIONS</span>
                            {categories.map((category) =>
                            <ul className="side-bar__list" key = {category.id}>
                            <Link to={`/items/${category.cat}`}>
                            <li className="side-bar__listItem">{category.cat}</li>
                            </Link>
                            </ul>
                            )}
                        </div>
                        <div className="side-bar__Item">
                            <span className="side-bar__title">FOLLOW ME</span>
                            <img className="side-bar__icon" src={instagram} alt="instagram icon"/>
                        </div>
                    </div>
                </div>
            )
        }

    export default SideBar;