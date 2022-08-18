import React from 'react';

function CreatePost() {
    return <div className = "createPostPage">
        <div className = "createPostContainer">
            <h1> Create Post</h1>
            <div className = "post">
                <label>Title</label>
                <input placeholder = "Title..."/>
            </div>
            <div className = "post">
                <label>Post:</label>
                <textarea placeholder = "Post..."/>
            </div>
        </div>
    </div>;
}

export default CreatePost;