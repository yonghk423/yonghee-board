import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from '@loadable/component';
const DetailPage = loadable(() => import('./Routes/DetailPage'));
const Home = loadable(() => import('./Routes/Home'))
const Login = loadable(() => import('./Routes/Login'))
const SignUp = loadable(() => import('./Routes/SignUp'))
const App = () => {  
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/posts/:id" element={<DetailPage/>}/>                       
            </Routes>
        </BrowserRouter>
    )
}

export default App;