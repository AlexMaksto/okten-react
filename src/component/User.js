import React from 'react';
import UserDetails from "./UserDetails";
import UserAddress from "./UserAddress";
import Company from "./Company";

const User = ({user}) => {

    return (
        <div>
            <UserDetails
                user={user}
            />
            <UserAddress
                user={user}
            />
            <Company
                user={user}
            />
        </div>
    );
};

export default User;