import React, {useEffect, useState} from 'react';
import {addDoc, collection} from 'firebase/firestore';
import {auth, db} from "../firebase";
import {useNavigate} from 'react-router-dom';
import ImageUpload from "../components/ImageUpload";

function CreatePost({isAuth}) {

    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("")

    //submit the data to firestore and store it in the database
    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
        });
        navigate("/");
    };

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [])

    return <div className="createPostPage">
        <div className="createPostContainer">
            <h1> Create Post</h1>
            <div className="post">
                <label>Title</label>
                <input placeholder="Title..."
                    //keeps track of the changes made to the title field
                       onChange={(event) => {
                           setTitle(event.target.value)
                       }}
                />
            </div>
            <div className="post">
                <label>Post:</label>
                <textarea placeholder="Post..."
                          onChange={(event) => {
                              setPostText(event.target.value)
                          }}
                />
            </div>
            <ImageUpload/>
            <button onClick={createPost}>Submit</button>
        </div>
    </div>;
}

export default CreatePost;