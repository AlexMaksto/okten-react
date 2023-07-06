// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)

import React, {useState} from 'react';
import Users from "./components/user/Users";
import Posts from "./components/post/Posts";

const App = () => {
    const [userId, setUserId] = useState();
    const userIdPost = (id) => {
        setUserId(id);
    }

    console.log(userId)

    return (
        <>
            <Users userIdPost={userIdPost}/>
            <Posts userId={userId}/>
        </>
    );
};

export default App;