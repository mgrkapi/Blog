import React, {useEffect, useState} from 'react';
import '../style/postPage.scss';
import SideBar from "../components/SideBar";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";
import {Link, useParams} from "react-router-dom";


function PostPage() {

    const{id} = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const blogRef= doc(db, "posts", id) //database, "blogs" collection, document with id
            const result = await getDoc(blogRef);
            if (result.exists()) {
                setPost(result.data())
            }
        };
        getPosts();

    }, [id]);


    return (
        <div className="post-page">
            <div className="singlePost">
                <img src={post.imgUrl} alt=""/>
                <Link to={`/items/${post.cat}`} className="link">
                <p className= "category">{post.cat}</p>
                </Link>
                <h1 className="singlePost__title">{post.title}</h1>
                <p className="singlePost__description">{post.postText}</p>
            </div>
            <SideBar/>
        </div>
    )
}

export default PostPage;