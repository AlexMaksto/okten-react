import {useEffect, useState} from "react";
import {useFetch} from "../../../hook/task4/useFetch";
import {Post} from "./Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const fetchPosts = useFetch('posts')

    useEffect(() => {
        setPosts(fetchPosts)
    }, [fetchPosts]);

    return (
        <div>
            {posts?.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {
    Posts
};