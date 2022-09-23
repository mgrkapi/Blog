import React, {useEffect, useState} from 'react';
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
import {auth, db} from "../firebase";
import "../style/home.scss";
import SideBar from "../components/SideBar";

function Home({isAuth}) {
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
            <div className="home-container">
                <SideBar className="sidebar"/>
                <div className="homePage">

                    {postLists.map((post) => {
                        return <div className="post" key={post.id}>
                            <div className="postHeader">
                                <div className="title">
                                    <h1>{post.title}</h1>
                                </div>
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
                            </div>
                            <div className="postTextContainer">{post.postText}</div>
                            {post.imgUrl && <img src={post.imgUrl} alt="postImage"/>}
                            <h3>@{post.author.name}</h3>
                        </div>
                    })}

                </div>
            </div>
        </>
    )
}

export default Home;