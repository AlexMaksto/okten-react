import {tasks} from "../../constans/tasks";
import {UsersTask5} from "../../components/task5/UsersTask5/UsersTask5";

const Task5Page = () => {
    return (
        <div>
            <p>{tasks.task5}</p>
            <UsersTask5/>
        </div>
    );
};

export {
    Task5Page
};