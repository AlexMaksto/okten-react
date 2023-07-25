import {Outlet} from "react-router-dom";

import css from '../../styles/Comment.module.css';
import {Comments} from "../../components";
import {useState} from "react";

const CommentsPage = () => {
    const [commentId, setCommentId] = useState(null);

    return (
        <div className={css.Comment}>
            <Comments setCommentId={setCommentId}/>
            <div className={css.Post}><Outlet commentId={commentId}/></div>
        </div>
    );
};

export {CommentsPage};