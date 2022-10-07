import React, {useEffect, useState} from 'react';
import {collection, getDocs, deleteDoc, doc, orderBy, query} from 'firebase/firestore';
import {auth, db} from "../firebase";
import "../style/home.scss";
import "../style/post.scss";
import {Link} from "react-router-dom";
import SimpleDateTime from 'react-simple-timestamp-to-date';
import bin from "../pictures/bin.png";

function Post({isAuth}) {

    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");
    const q = query(postsCollectionRef, orderBy("timeStamp", "desc"))


    const deletePost = async (id) => {
        const postDoc = doc(db, 'posts', id);
        await deleteDoc(postDoc);
    };

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(q);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getPosts();
    }, []);


    return (
        <>
            <div className="posts">
                {postLists.map((post,uid) => {
                    return (
                        <div className="post" key={post.id}>
                            <div className="deletePost">
                                {isAuth && post.author.id === auth.currentUser.uid && (
                                    <button
                                        onClick={() => {
                                            deletePost(post.id);
                                        }}>
                                        <img src={bin} alt= "delete" />
                                    </button>
                                )}
                            </div>
                            {post.imgUrl && <img src={post.imgUrl} alt="view"/>}
                            <div className="post__content">
                                <h3>Author: {post.author.name}</h3>
                                <div className="header">
                                    <Link to={`/post/${post.id}`} className="link">
                                        <div className="title">
                                            <h1>{post.title}</h1>
                                        </div>
                                    </Link>
                                    <time className="date">
                                        <SimpleDateTime
                                            dateSeparator="/"
                                            format="YMD"
                                            showTime="0">{new Date(post.timeStamp.seconds * 1000)}
                                        </SimpleDateTime>
                                    </time>

                                </div>
                                <div className="post__text">{post.postText.substring(0, 260)}...</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Post;