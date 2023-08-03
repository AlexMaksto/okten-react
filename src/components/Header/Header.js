import {NavLink} from "react-router-dom";
import {routersURL} from "../../constans/routersURL";
import css from "../../styles/Header.module.css"

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={routersURL.MAIN}>Home</NavLink>
            <NavLink to={routersURL.TASK1}>Task 1</NavLink>
            <NavLink to={routersURL.TASK2}>Task 2</NavLink>
            <NavLink to={routersURL.TASK3}>Task 3</NavLink>
            <NavLink to={routersURL.TASK4.MAIN}>Task 4</NavLink>
            <NavLink to={routersURL.TASK5}>Task 5</NavLink>
        </div>
    );
};

export {
    Header
};