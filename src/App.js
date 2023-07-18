// Реалізувати, використовуючи useForm хук, а також сервіс axios наступне. Всі запити винести в сервісний рівень
//     2.
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments

import React, {useState} from 'react';
import CommentForm from "./components/comment/CommentForm";
import PostContainer from "./components/post/PostContainer";

const App = () => {

    const [postId, setPostId] = useState('');

    return (
        <div>
            <CommentForm postId={postId} setPostId={setPostId}/>
            <hr/>
            <PostContainer setPostId={setPostId}/>
        </div>
    );
};

export default App;