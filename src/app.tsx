import React from 'react';
import Home from './Routes/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>                            
            </Routes>
        </BrowserRouter>
    )
}

export default App;