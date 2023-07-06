import React from 'react';

const PostComponents = (props) => {

    const {post} = props;

    return (
        <div>
            <p>UserId {post.userId}</p>
            <p>PostId {post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponents;