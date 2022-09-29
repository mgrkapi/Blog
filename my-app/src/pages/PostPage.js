import React, {useEffect, useState} from 'react';
import '../style/postPage.scss';
import SideBar from "../components/SideBar";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import {useParams} from "react-router-dom";



function PostPage() {

    const{postID} = useParams()
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");


    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

        };
        getPosts();

    }, []);


    return (
        <div className="post-page">

                    <div className="singlePost">
                        <img src="" alt=""/>
                        <h1 className="singlePost__title">title</h1>
                        <div className="singlePost__info">
                            <span className="singlePost__author">Author:</span>
                        </div>
                        <p className="singlePost__description">"Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Architecto, asperiores autem commodi
                            deleniti deserunt error facilis labore laborum magni molestiae molestias natus neque
                            perspiciatis
                            possimus reprehenderit soluta tenetur, totam voluptate.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, asperiores autem
                            commodi
                            deleniti deserunt error facilis labore laborum magni molestiae molestias natus neque
                            perspiciatis
                            possimus reprehenderit soluta tenetur, totam voluptate."</p>

                    </div>
            <SideBar/>
        </div>
    )
}

export default PostPage;