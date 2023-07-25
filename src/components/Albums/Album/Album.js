const Album = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div>
            <div><b>id: {id}</b></div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <br/>
        </div>
    );
};

export {Album};