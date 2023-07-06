import React, {useEffect, useState} from 'react';
import UserComponents from "./UserComponents";

const Users = (props) => {
    const {userIdPost} = props;
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => setUsers(users))
            .catch(e => console.error(e));

    }, [])

    const showPost = (id) => {
        userIdPost(id);
    };

    return (
        <>

            {users.map((user, id) => {
                return (
                    <UserComponents
                        key={id}
                        user={user}
                        showPost={showPost}
                    />)
            })}
        </>
    );
};

export default Users;