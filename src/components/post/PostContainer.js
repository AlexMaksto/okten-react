import React from 'react';
import Posts from "./Posts";

const PostContainer = ({setPostId}) => {
    return (
        <div>
            <Posts setPostId={setPostId}/>
        </div>
    );
};

export default PostContainer;