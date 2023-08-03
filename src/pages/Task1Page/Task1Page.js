import {tasks} from "../../constans/tasks";
import {AppTestUseMemo} from "../../components/task1/AppTestUseMemo/AppTestUseMemo";

const Task1Page = () => {
    return (
        <div>
            <p>{tasks.task1}</p>
            <AppTestUseMemo/>
        </div>
    );
};

export {
    Task1Page
};