// отримати пости та вивести їх використовуючи класові компоненти
// отримати коментарі та вивести їх використовуючи класові компоненти
// отримати автівки та вивести їх використовуючи класові компоненти

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
