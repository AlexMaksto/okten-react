import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./general/layouts";
import {routerUrl} from "./general/constans";
import {MainPage, NotFoundPage, Task1Page, Task2Page, Task3Page} from "./general/pages";

const router = createBrowserRouter([
    {
        path: routerUrl.MAIN,
        element: <MainLayout/>,
        children: [
            {
              path: routerUrl.MAIN,
              element: <MainPage/>
            },
            {
                path: routerUrl.TASK1,
                element: <Task1Page/>
            },
            {
                path: routerUrl.TASK2,
                element: <Task2Page/>
            },
            {
                path: routerUrl.TASK3,
                element: <Task3Page/>
            },
            {
                path: routerUrl.NOT_FOUND_PAGE,
                element: <NotFoundPage/>
            }
            ]
    }
])

export {
    router
}