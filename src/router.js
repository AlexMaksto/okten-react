import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviesListCardPage, MoviesPage, NotFoundPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies',
                element: <MoviesPage/>
            },
            {
                path: 'movies/:page',
                element: <MoviesPage/>
            },
            {
                path: 'movie/:id',
                element: <MoviesListCardPage/>
            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }
])

export {
    router
}