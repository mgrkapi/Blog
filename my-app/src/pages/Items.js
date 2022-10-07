import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";

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
        <div className="post-page">
            {items.map((item) => (
            <div className="singlePost" key = {item.id}>
                <img src={item.imgUrl} alt=""/>
                <p>{item.cat}</p>
                {/*/!*<time className= "date">*!/*/}
                {/*/!*    <SimpleDateTime*!/*/}
                {/*/!*        dateSeparator="/"*!/*/}
                {/*/!*        format="YMD"*!/*/}
                {/*/!*        showTime="0">{new Date(items.timeStamp.seconds * 1000)}*!/*/}
                {/*/!*    </SimpleDateTime>*!/*/}
                {/*</time>*/}
                <h1 className="singlePost__title">{item.title}</h1>
                <p className="singlePost__description">{item.postText}</p>
            </div>
            ))}
        </div>
    )

}

export default Items;