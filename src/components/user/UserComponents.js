import React from 'react';

const UserComponents = (props) => {

    const {user, showPost} = props;

    return (
        <div>
            <p>{user.name}</p>
            <button onClick={() => showPost(user.id)}>Post's {user.name}</button>
        </div>
    );
};

export default UserComponents;