import React, {useEffect, useState} from 'react';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {auth, db, storage} from "../firebase";
import {useNavigate} from 'react-router-dom';

function CreatePost({isAuth}) {

    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("")
    const [image, setImage] = useState(null)
    const [imgUrl, setImgUrl] = useState("")
    const [cat, setCat] = useState("")
    const [progress, setProgress] = useState(0)

    //submit the data to firestore and store it in the database
    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
            imgUrl,
            cat,
            timeStamp: serverTimestamp()
        });
        navigate("/");
    };

    const changeImage = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            uploadImage(e.target.files[0]);
        }
    }

    const uploadImage = (file) => {
        console.log(file)
        console.log(image)
        const metadata = {
            contentType: 'image/jpeg' || 'image/png'
        };

// Upload file and metadata to the object 'images/'
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = Number(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;
                    case 'storage/unknown':
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    return setImgUrl(downloadURL);
                });
            });
        return {progress}
    }

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
            <div className="post">
                <label htmlFor="categories">Choose category:</label>
                <select id="categories" name="categories"
                        onChange={(event) => {
                    setCat(event.target.value)
                }}>
                    <option value="Warsaw">Warsaw</option>
                    <option value="Poland">Poland</option>
                    <option value="Europe">Europe</option>
                    <option value="World">World</option>

                </select>
            </div>
            <div className= "image-upload">
                <label htmlFor="files" className="btn" >Select Image</label>
                <input id="files" style={{display: "none"}} type="file" onChange={changeImage}/>
            </div>
            <div className="progress-bar" style={{width: progress + "%"}}></div>
            <button onClick={createPost}>Submit</button>
        </div>
    </div>;
}

export default CreatePost;