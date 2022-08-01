import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Home from './Routes/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from './Routes/DetailPage';

const App = () => {  
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts/:id" element={<DetailPage/>}/>                       
            </Routes>
        </BrowserRouter>
    )
}

export default App;