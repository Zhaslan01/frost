import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import UserPage from "./UserPage";
import ItemPage from "./pages/item_page/ItemPage";
import MainPage from "./pages/main_page/MainPage";
import CartPage from "./pages/cart_page/CartPage";
import Registration from "./components/modal/registration/Registration";

const router = createBrowserRouter([
    {
        path: '/main',
        element: <MainPage/>
    },
    {
        path: '/item/:productId',
        element: <ItemPage/>
    },
    {
        path:'/cart',
        element: <CartPage/>
    },
    {
        path:'/registration',
        element: <Registration/>
    }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    //   <App />
    <RouterProvider router={router}/>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
