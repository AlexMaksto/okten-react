import {useNavigate} from "react-router-dom";

const Comment = ({comment, setCommentId}) => {
    const {postId, id, name, email, body} = comment;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`posts/${postId}`);
        setCommentId(id);
    }

    return (
        <div>
            <div><b>id: {id}</b></div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={handleClick}>Get post</button>
            <br/>
        </div>
    );
};

export {Comment};