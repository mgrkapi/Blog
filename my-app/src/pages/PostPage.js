import React from 'react';
import '../style/postPage.scss';
import SideBar from "../components/SideBar";

function PostPage() {
    return (
        <div className="post-page">

            <div className="singlePost">
                <img src="https://via.placeholder.com/500x300" alt=""/>
                <h1 className="singlePost__title">Lorem ipsum</h1>
                <div className="singlePost__info">
                    <span className="singlePost__author">Author:</span>
                </div>
                <p className= "singlePost__description">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, asperiores autem commodi
                    deleniti deserunt error facilis labore laborum magni molestiae molestias natus neque perspiciatis
                    possimus reprehenderit soluta tenetur, totam voluptate.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, asperiores autem commodi
                    deleniti deserunt error facilis labore laborum magni molestiae molestias natus neque perspiciatis
                    possimus reprehenderit soluta tenetur, totam voluptate."</p>

            </div>
            <SideBar/>
        </div>
    )
}

export default PostPage;