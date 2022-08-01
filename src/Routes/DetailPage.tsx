import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
const BASE_PATH = "https://jsonplaceholder.typicode.com";

interface IpostsData {
    userId: number;
    id: number;
    title : string;
    body : string;
}
interface IdetailData {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface IcommentsData {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
const DetailPage = () => {
    const idData = useParams()
    const ItemId:number = Number(idData.id)
    console.log(ItemId);
    const [postsData, setPostsData] = useState<IpostsData[]>([]);
    console.log(postsData);
    const [commentsData, setCommentsData] = useState<IcommentsData[]>([]);    
    const [detailData, setDetailData] = useState<IdetailData[]>([])
    console.log(detailData);
    
    useEffect(() => {    
        getData()
    } , [])
    useEffect(() => {
        getDetailData()
    }, [])
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
     const getDetailData = async () => {
    try {
        const response = await axios.get(`${BASE_PATH}/comments`)
        // console.log(response);
        const resDetailData = await response?.data;
        setCommentsData(resDetailData);
       
    } catch(err) {
        console.log("Error >>", err);
        }
    }
    const postsBody = postsData.filter((ele) => (
            ItemId === ele?.id               
        ))
    console.log(postsBody);
    const comments = commentsData.filter((ele) => (
            ItemId === ele?.postId               
        ))
    console.log(comments);
    console.log(comments.length);
    return (
        <div>
            <div>
                {postsBody?.map((ele) => (
                    <div key={ele?.id}>        
                        <div>{ele?.title}</div>
                        <div> 사용자 {ele?.userId}</div>
                        <div>{ele?.body}</div>
                        <div>{comments?.length} 개</div>
                    </div>
                ))}
                {comments.map((ele) => (
                    <div key={ele?.id}>
                        <div>{ele?.name}</div>
                        <div>{ele?.body}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DetailPage;