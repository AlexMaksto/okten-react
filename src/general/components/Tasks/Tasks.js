import {NavLink} from "react-router-dom";
import {routerUrl} from "../../constans";

const Tasks = () => {
    const tasks = {
        task1: 'Отримати пости та вивести їх використовуючи класові компоненти',
        task2: 'Отримати коментарі та вивести їх використовуючи класові компоненти',
        task3: 'Отримати автівки та вивести їх використовуючи класові компоненти'
    }

    return (
        <div>
            <div><NavLink to={routerUrl.TASK1}>{tasks.task1}</NavLink></div>
            <div><NavLink to={routerUrl.TASK2}>{tasks.task2}</NavLink></div>
            <div><NavLink to={routerUrl.TASK3}>{tasks.task3}</NavLink></div>
        </div>
    );
};

export {Tasks};