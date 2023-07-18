import React, {useState} from 'react';
import UserForm from "./UserForm";
import RegisterOk from "./RegisterOk";

const UserContainer = () => {

    const [statusNewUser, setStatusNewUser] = useState(false);

    return (
        <div>
            {!statusNewUser && <UserForm
                setStatusNewUser={setStatusNewUser}/>}
            {statusNewUser && <RegisterOk
                setStatusNewUser={setStatusNewUser}/>}
        </div>
    );
}

export default UserContainer;