import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from '@loadable/component';
import Header from './components/Header';
const DetailPage = loadable(() => import('./Routes/DetailPage'));
const Home = loadable(() => import('./Routes/Home'))

const App = () => {  
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts/:id" element={<DetailPage/>}/>                       
            </Routes>
        </BrowserRouter>
    )
}

export default App;