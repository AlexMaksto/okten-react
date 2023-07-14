import React, {useState, useEffect} from 'react';
import Post from "./Post";

const Posts = ({setPostId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then(value => setPosts(value))
            .catch(e => console.error(e))
    }, []);

    return (
        <>
            {posts.map(post => <Post post={post} key={post.id} setPostId={setPostId}/>)}
        </>
    );
};

export default Posts;