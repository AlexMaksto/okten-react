import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import {router} from './router';
import './styles/index.css';
import './styles/dark.css'
import {ThemeContextProvider} from "./hok";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeContextProvider>
        <RouterProvider router={router}/>
    </ThemeContextProvider>
);