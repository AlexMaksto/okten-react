import React from 'react';

const PostComponent = (props) => {

    const {post, detailPosts, showDetail, hideDetail} = props;

    let result;
    if (detailPosts.includes(post.id)) {
        result = (
            <p> userId: {post.userId}<br/>
                id: {post.id}<br/>
                title: {post.title}<br/>
                body: {post.body}<br/></p>);
    } else {
        result = (
            <p> id: {post.id}<br/>
                title: {post.title}<br/></p>
        );
    }

    return (
        <div>
            {result}
            <button onClick={() => showDetail(post.id)}>Show detail</button>
            <button onClick={() => hideDetail(post.id)}>Hide detail</button>
        </div>
    );
};

export default PostComponent;