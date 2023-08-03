const UserTask5 = ({user, handleDelete}) => {
    const {id, name, username} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <button onClick={() => handleDelete(id)}>Delete {id}</button>
            <br/>
        </div>
    );
};

export {
    UserTask5
};