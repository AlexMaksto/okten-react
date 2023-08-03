import {routersURL} from "../../constans/routersURL";
import {tasks} from "../../constans/tasks";
import {NavLink} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <br/>
            <div><button>TASK 1: <NavLink to={routersURL.TASK1}>{tasks.task1}</NavLink></button></div>
            <br/>
            <div><button>TASK 2: <NavLink to={routersURL.TASK2}>{tasks.task2} ({tasks.task1})</NavLink></button></div>
            <br/>
            <div><button>TASK 3: <NavLink to={routersURL.TASK3}>{tasks.task3}</NavLink></button></div>
            <br/>
            <div><button>TASK 4: <NavLink to={routersURL.TASK4}>{tasks.task4}</NavLink></button></div>
            <br/>
            <div><button>TASK 5: <NavLink to={routersURL.TASK5}>{tasks.task5}</NavLink></button></div>
        </div>
    );
};

export {
    MainPage
};