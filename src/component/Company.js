import React from 'react';

const Company = ({user}) => {

    const {name, catchPhrase, bs} = user.company

    return (
        <>
            <p><b>Company</b></p>
            <p>{name}</p>
            <p>{catchPhrase}</p>
            <p>{bs}</p>
        </>
    );
};

export default Company;