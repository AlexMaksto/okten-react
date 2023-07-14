import React, {useState} from 'react';
import post from "../post/Post";

const CommentForm = ({postId, setPostId}) => {

    const initialState = {
        postId: '',
        name: '',
        email: '',
        body: ''
    }

    const [comment, setComment] = useState(initialState);
    const inputHandle = (e) => {
        setComment(prev => ({...prev, [e.target.name]: e.target.value}))

    }
    const save = (e) => {
        e.preventDefault();
        fetch('http://jsonplaceholder.typicode.com/comments', {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(post),
            method: 'POST'
        })
            .then(value => {
                if (!value.ok) {
                    throw Error('error')
                }
                return value.json()
            })
            .then(() => {
                setPostId('');
                setComment(initialState);
                console.log('All ok')
            })
            .catch(e => console.error(e))
    }

    return (
        <form onSubmit={save}>
            <div><label>postId: <input type="text" value={postId} name={'postId'}
                                       onChange={inputHandle}/></label>
            </div>
            <div><label>name: <input type="text" value={comment.name} name={'name'} onChange={inputHandle}/></label>
            </div>
            <div><label>email: <input type="text" value={comment.email} name={'email'} onChange={inputHandle}/></label>
            </div>
            <div><label>body: <input type="text" value={comment.body} name={'body'} onChange={inputHandle}/></label>
            </div>
            <button>Insert your five cents</button>
        </form>
    );
};

export default CommentForm;