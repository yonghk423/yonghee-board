import React from 'react';
import Home from './Routes/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="posts/:id" element={< Home />} />                             
            </Routes>
        </BrowserRouter>
    )
}

export default App;