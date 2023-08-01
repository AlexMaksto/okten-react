import React from "react";
import {Post} from "./Post/Post";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    postsURL = 'https://jsonplaceholder.typicode.com/posts';

    getPosts() {
        fetch(this.postsURL)
            .then((res) => res.json())
            .then(posts => this.setState({posts}))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

export {
    Posts
}