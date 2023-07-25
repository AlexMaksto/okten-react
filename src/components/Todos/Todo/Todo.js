const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;
    return (
        <div>
            <div><b>id: {id}</b></div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
            <br/>
        </div>
    );
};

export {Todo};