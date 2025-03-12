import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

import Sidebar from "./Sidebar";
import BookWrite from "./bookwrite";
import Book from "./Book";
import BookView from "./BookView";
import BookUpdate from "./BookUpdate";
import Reply from "./Reply";

export default function App( props ){
    return(<>
        <BrowserRouter>
            <div id="wrap" >
                <Sidebar />
                <Routes>
                    <Route path="/" element={ <Book /> } ></Route>
                    <Route path="/bookwrite" element={ <BookWrite /> } ></Route>
                    <Route path="/book" element={ <Book /> } ></Route>
                    <Route path="/bookview" element={ <BookView /> } ></Route>
                    <Route path="/bookupdate" element={ <BookUpdate /> } ></Route>
                    <Route path="/reply" element={ <Reply /> } ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    </>)
}