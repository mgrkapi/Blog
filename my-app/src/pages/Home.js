import React, {useEffect, useState} from 'react';
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
import {auth, db, storage} from "../firebase";
import {getDownloadURL, listAll, ref} from "firebase/storage";
import "../style/home.scss";

function Home({isAuth}) {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");


    const deletePost = async (id) => {
        const postDoc = doc(db, 'posts', id);
        await deleteDoc(postDoc);
    };

    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getPosts();
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            });
        });
    }, []);


    return <div className="homePage">{postLists.map((post) => {
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
            {imageList.map((url, id) => {
            return <img src = {url} key = {id}/>
            })}
        <h3>@{post.author.name}</h3>
    </div>
    })}</div>
}

export default Home;