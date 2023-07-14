import React, {useState} from 'react';

const UserForm = ({setStatusNewUser}) => {
    const initialState = {
        name: '',
        username: '',
        email: ''
    }

    const [user, setUser] = useState(initialState);

    const inputHandle = (e) => {
        setUser(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const save = (e) => {
        e.preventDefault();
        fetch('http://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
            .then(value => {
                if (!value.ok) {
                    throw Error('error')
                }
                return value.json()
            })
            .then(() => {
                setUser(initialState);
                setStatusNewUser(true);
            })
            .catch(e => console.error(e))
    }

    return (
        <form onSubmit={save}>
            <div><label>Name: <input type="text" value={user.name} name={'name'} onChange={inputHandle}/></label></div>
            <div>Username: <label><input type="text" value={user.username} name={'username'} onChange={inputHandle}/></label></div>
            <div><label>Email: <input type="text" value={user.email} name={'email'} onChange={inputHandle}/></label>
            </div>
            <div>
                <button>Save</button>
            </div>
        </form>
    );
};

export default UserForm;