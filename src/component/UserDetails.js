import React from 'react';

const UserDetails = ({user}) => {

    const {id, name, username, email, phone, website} = user;

    return (
        <>
            <p><b>User</b></p>
            <p>{id}</p>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </>
    );
};

export default UserDetails;