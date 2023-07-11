import React from 'react';
import User from "./User";

const Users = ({users}) => {



    return (
        <>
            {users?.map((user, id) => {
                return (
                    <User
                        key={id}
                        user={user}
                    />)
            })}
        </>
    );
};

export default Users;