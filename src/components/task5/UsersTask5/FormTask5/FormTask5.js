import {useState} from "react";

const FormTask5 = ({handleAddItem}) => {
    const initialState = {
        name: '',
        username: ''
    }
    const [user, setUser] = useState(initialState);
    const inputHandle = (e) => {
        setUser(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const addUser = (e) => {
        e.preventDefault();
        setUser(initialState)
        handleAddItem(user);
    }

    return (
        <div>
            <form onSubmit={addUser}>
                <div><label>name: <input type="text" value={user.name} name={'name'} onChange={inputHandle}/></label>
                </div>
                <div><label>user name: <input type="text" value={user.username} name={'username'}
                                              onChange={inputHandle}/></label></div>
                <div>
                    <button>Add user</button>
                </div>
            </form>
        </div>
    );
};

export {
    FormTask5
};