import React, {useState, useEffect} from 'react';
import Post from "./Post";
import axios from "axios";

const Posts = ({setPostId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(value => setPosts(value.data))
            .catch(e => console.error(e))
    }, [])

    return (
        <>
            {posts.map(post => <Post post={post} key={post.id} setPostId={setPostId}/>)}
        </>
    );
};

export default Posts;