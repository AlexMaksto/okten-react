import {createBrowserRouter, Navigate} from "react-router-dom";
import {routersURL} from "./constans/routersURL";
import {MainLayouts} from "./layouts/MainLayouts/MainLayouts";
import {
    CommentsTask4Page,
    MainPage,
    NotFoundPage,
    PostsTask4Page,
    Task1Page,
    Task2Page,
    Task3Page,
    Task4Page,
    Task5Page,
    UsersTask4Page
} from "./pages";

const router = createBrowserRouter([
    {
        path: routersURL.MAIN,
        element: <MainLayouts/>,
        children: [
            {
                path: routersURL.MAIN,
                element: <MainPage/>
            },
            {
                path: routersURL.TASK1,
                element: <Task1Page/>
            },
            {
                path: routersURL.TASK2,
                element: <Task2Page/>
            },
            {
                path: routersURL.TASK3,
                element: <Task3Page/>
            },
            {
                path: routersURL.TASK4.MAIN,
                element: <Task4Page/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to={routersURL.TASK4.USERS}/>
                    },
                    {
                        path: routersURL.TASK4.USERS,
                        element: <UsersTask4Page/>
                    },
                    {
                        path: routersURL.TASK4.POSTS,
                        element: <PostsTask4Page/>
                    },
                    {
                        path: routersURL.TASK4.COMMENTS,
                        element: <CommentsTask4Page/>
                    }
                ]
            },
            {
                path: routersURL.TASK5,
                element: <Task5Page/>
            },
            {
                path: routersURL.NOT_FOUND_PAGE,
                element: <NotFoundPage/>
            }
        ]
    }
])

export {
    router
}