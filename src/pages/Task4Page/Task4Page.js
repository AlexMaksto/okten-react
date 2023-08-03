import {tasks} from "../../constans/tasks";
import {HeaderTask4} from "../../components/task4/HeaderTask4/HeaderTask4";
import {Outlet} from "react-router-dom";

const Task4Page = () => {
    return (
        <div>
            <p>{tasks.task4}</p>
            <HeaderTask4/>
            <Outlet/>
        </div>
    );
};

export {
    Task4Page
};