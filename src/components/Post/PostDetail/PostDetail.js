const PostDetail = ({post}) => {
    const {userId, id, title, body} = post;
    
    return (
        <div>
            <div><b>id: {id}</b></div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostDetail};