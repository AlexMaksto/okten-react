import css from '../../../styles/Header.module.css'
import {NavLink} from "react-router-dom";
import {routersURL} from "../../../constans/routersURL";

const HeaderTask4 = () => {
    return (
        <div className={css.Header}>
            <NavLink to={routersURL.TASK4.USERS}>Users</NavLink>
            <NavLink to={routersURL.TASK4.POSTS}>Posts</NavLink>
            <NavLink to={routersURL.TASK4.COMMENTS}>Comments</NavLink>
        </div>
    );
};

export {
    HeaderTask4
};