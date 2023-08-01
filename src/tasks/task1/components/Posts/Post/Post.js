import React from "react";

class Post extends React.Component {
    constructor(post) {
        super(post);
        this.state = {
            post
        }
    }

    render() {
        return (
            <div>
                <div>userId: {this.state.post.post.userId}</div>
                <div>id: {this.state.post.post.id}</div>
                <div>title: {this.state.post.post.title}</div>
                <div>body: {this.state.post.post.body}</div>
                <br/>
            </div>
        )
    }

}

export {
    Post
}