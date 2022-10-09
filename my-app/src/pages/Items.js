import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import SimpleDateTime from 'react-simple-timestamp-to-date';

const Items = () => {

    const {category} = useParams()

    const [items, setItems] = useState([])
    const blogRef= collection(db, "posts")

    useEffect(() => {
        const getItems = async () => {
            const result = await getDocs(blogRef);
            const allItems = result.docs.map((doc) => ({...doc.data(), id: doc.id}))
            const categoryItems = allItems.filter(item => item.cat === category);
            setItems(categoryItems)
        }

        getItems()

    }, [])

    return (
        <div className="posts">
            {items.map((item) => (
            <div className="post" key = {item.id}>
                <div className="post__content">
                <img className = "image" src={item.imgUrl} alt=""/>
                <p className= "category">{item.cat}</p>
                <time className= "date">
                    <SimpleDateTime
                        dateSeparator="/"
                        format="YMD"
                        showTime="0">{new Date(item.timeStamp.seconds * 1000)}
                    </SimpleDateTime>
                </time>
                <Link to={`/post/${item.id}`} className="link">
                <h1 className="title">{item.title}</h1>
                </Link>
                <p className="post__description">{item.postText.substring(0, 260)}...</p>
                </div>
            </div>
            ))}
        </div>
    )

}

export default Items;