import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

import Sidebar from "./Sidebar";
import Home from "./Home";

export default function App( props ){
    return(<>
        안녕
        <BrowserRouter>
            <div id="wrap" >
                <Sidebar />
                <Routes>
                    <Route path="/" element={ <Home /> } ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    </>)
}