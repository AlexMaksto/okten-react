import {NavLink} from "react-router-dom";
import {routerUrl} from "../../constans";
import css from "../../styles/Header.module.css"

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={routerUrl.MAIN}>Home</NavLink>
            <NavLink to={routerUrl.TASK1}>Task 1</NavLink>
            <NavLink to={routerUrl.TASK2}>Task 2</NavLink>
            <NavLink to={routerUrl.TASK3}>Task 3</NavLink>
        </div>
    );
};

export {Header};