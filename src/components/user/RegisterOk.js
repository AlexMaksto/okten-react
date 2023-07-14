import React from 'react';

const RegisterOk = ({setStatusNewUser}) => {

    const startNewUser = () => {
        setStatusNewUser(false);
    }

    return (
        <div>
            <p>New user successful</p>
            <button onClick={() => startNewUser()}>Add another user</button>
        </div>
    );
};

export default RegisterOk;