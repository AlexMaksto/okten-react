import React, {useEffect, useState} from 'react';
import PostComponents from "./PostComponents";

const Posts = (props) => {
    const {userId} = props;
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => setPosts(posts))
            .catch(e => console.error(e))
    }, [])

    return (
        <>
            {posts.filter(item => item.userId === userId)
                .map((post, id) => {
                    return (
                        <PostComponents
                            key={id}
                            post={post}
                        />)
                })}
        </>
    );
};

export default Posts;