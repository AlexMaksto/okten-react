import {useEffect, useState} from "react";
import {useFetch} from "../../../hook/task4/useFetch";
import {User} from "./User/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = useFetch('users')

    useEffect(() => {
        setUsers(fetchUsers)
    }, [fetchUsers]);

    return (
        <div>
            {users?.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {
    Users
};