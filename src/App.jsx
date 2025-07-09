import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from "./components/Main";

import Header from './components/Header';

export default props =>
    <div className="app">
        <Header />
        <Main />
    </div>

