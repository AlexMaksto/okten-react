import React from 'react';
import {Comment} from "./Comment/Comment";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    commentsURL = 'https://jsonplaceholder.typicode.com/comments';

    getComments() {
        fetch(this.commentsURL)
            .then(res => res.json())
            .then(comments => this.setState({comments}))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.getComments();
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    }
}

export {
    Comments
};