import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";


export default props =>
    <BrowserRouter basename="/portfolio-profissional">
        <div className="app">
            <Header />
            <AppRoutes />
            <Footer />
        </div>
    </BrowserRouter>


