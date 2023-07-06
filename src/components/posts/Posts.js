import React, {useEffect, useState} from 'react';
import PostComponent from "./PostComponent";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [detailPosts, setDetailPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => setPosts(posts))
            .catch(e => console.error(e))
    }, [])

    const showDetail = (id) => {
        const newDetailPosts = [...detailPosts];
        if (!newDetailPosts.includes(id)) {
            newDetailPosts.push(id);
        }
        setDetailPosts(newDetailPosts);
    }

    const hideDetail = (id) => {
        const newDetailPosts = [...detailPosts];
        const index = newDetailPosts.indexOf(id)
        if (index > -1) {
            newDetailPosts.splice(index, 1);
        }
        setDetailPosts(newDetailPosts);
    }


    console.log(detailPosts)
    return (
        <>
            {posts.map((post, id) => {
                return (
                    <PostComponent
                        key={id}
                        post={post}
                        detailPosts={detailPosts}
                        showDetail={showDetail}
                        hideDetail={hideDetail}
                    />)
            })}
        </>
    );
};

export default Posts;