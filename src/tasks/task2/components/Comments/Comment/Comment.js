import React from 'react';

class Comment extends React.Component {
    constructor(comment) {
        super(comment);
        this.state = {
            comment
        }
    }

    render() {
        return (
            <div>
                <div>postId: {this.state.comment.comment.postId}</div>
                <div>id: {this.state.comment.comment.id}</div>
                <div>name: {this.state.comment.comment.name}</div>
                <div>email: {this.state.comment.comment.email}</div>
                <div>body: {this.state.comment.comment.body}</div>
                <br/>
            </div>
        );
    }
}

export {
    Comment
};