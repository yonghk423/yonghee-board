import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Home from './Routes/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMatch, useNavigate } from "react-router-dom";

const BASE_PATH = "https://jsonplaceholder.typicode.com";
interface IpostsData {
    userId: number;
    id: number;
    title : string;
    body : string;
}

const App = () => {
    const [postsData, setPostsData] = useState<IpostsData[]>([]);   
    
    useEffect(() => {
        getData()    
    } , [])    
    
    const getData = async () => {
    try {
        const response = await axios.get(`${BASE_PATH}/posts`)
        // console.log(response);
        const resMainData = await response?.data;
        setPostsData(resMainData);
       
    } catch(err) {
        console.log("Error >>", err);
        }
    }
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                <div>
                    {postsData.map((ele) => (
                        <Home key={ele.id} {...ele} />
                    ))}
                </div>
                }/>
                <Route path="/posts/:id" element={
                <div>
                    {postsData.map((ele) => (
                        <Home key={ele.id} {...ele} />
                    ))}
                </div>
                }/>                       
            </Routes>
        </BrowserRouter>
    )
}

export default App;