import React from 'react';

const UserAddress = ({user}) => {

    const {street, suite, city} = user.address

    return (
        <>
            <p><b>Address</b></p>
            <p>{street}</p>
            <p>{suite}</p>
            <p>{city}</p>
        </>
    );
};

export default UserAddress;