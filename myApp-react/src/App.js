import React from "react";
import { HashRouter , } from "react-router-dom";
import { MyRouter, HeaderMenu } from "./router/index";
import './App.css';

export default function App() {
    return (
        <HashRouter>
            <HeaderMenu />
            <MyRouter />
        </HashRouter>
    );
};
