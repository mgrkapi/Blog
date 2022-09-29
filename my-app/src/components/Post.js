import React, {useEffect, useState} from 'react';
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
import {auth, db} from "../firebase";
import "../style/home.scss";
import "../style/post.scss";
import {Link} from "react-router-dom";


function Post({isAuth}) {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");


    const deletePost = async (id) => {
        const postDoc = doc(db, 'posts', id);
        await deleteDoc(postDoc);
    };

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getPosts();

    }, []);

    return (
        <>
                    <div className="posts">
                        {postLists.map((post) => {
                            return (
                                <div className="post" key={post.id}>
                                    <div className="deletePost">
                                        {isAuth && post.author.id === auth.currentUser.uid && (
                                            <button
                                                onClick={() => {
                                                    deletePost(post.id);
                                                }}>
                                                &#128465;
                                            </button>
                                        )}
                                    </div>
                                    {post.imgUrl && <img src={post.imgUrl} alt="view"/>}
                                    <div className= "post__content">
                                        <div className="header">
                                            <Link to = '/post/${post.id}'>
                                            <div className="title">
                                                <h1>{post.title}</h1>
                                            </div>
                                            </Link>
                                        </div>
                                        <div className="post__text">{post.postText.substring(0, 260)}...</div>
                                        <h3>@{post.author.name}</h3>
                                        <span>date{post.createdAt}</span>
                                    </div>
                                </div>
                            )})}

                    </div>

        </>
    )
}

export default Post;