import React from 'react';

const Post = ({post, setPostId}) => {

    const {userId, id, title, body} = post;

    return (
        <p>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => setPostId(id)}>Add comment</button>
        </p>
    );
};

export default Post;