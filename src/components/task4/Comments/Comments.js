import {useEffect, useState} from "react";
import {useFetch} from "../../../hook/task4/useFetch";
import {Comment} from "./Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const fetchComments = useFetch('comments');

    useEffect(() => {
        setComments(fetchComments)
    }, [fetchComments]);

    return (
        <div>
            {comments?.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {
    Comments
};