import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from '@loadable/component';
const DetailPage = loadable(() => import('./Routes/DetailPage'));
const Home = loadable(() => import('./Routes/Home'))
// import DetailPage from './Routes/DetailPage';
// import Home from './Routes/Home';

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