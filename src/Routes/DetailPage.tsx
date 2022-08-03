import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components"
import { useParams } from 'react-router-dom';
const BASE_PATH = "https://jsonplaceholder.typicode.com";

interface IpostsData {
    userId: number;
    id: number;
    title : string;
    body : string;
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
    const [postsData, setPostsData] = useState<IpostsData[]>([]);
    const [commentsData, setCommentsData] = useState<IcommentsData[]>([]);    
    
    useEffect(() => {    
        getData()
    } , [])
    useEffect(() => {
        getDetailData()
    }, [])

    const getData = async () => {
    try {
        const response = await axios.get(`${BASE_PATH}/posts`)
        const resMainData = await response?.data;
        setPostsData(resMainData);
       
    } catch(err) {
        console.log("Error >>", err);
        }
    }
     const getDetailData = async () => {
    try {
        const response = await axios.get(`${BASE_PATH}/comments`)
        const resDetailData = await response?.data;
        setCommentsData(resDetailData);
       
    } catch(err) {
        console.log("Error >>", err);
        }
    }
    
    const postsBody = postsData.filter((ele) => (
            ItemId === ele?.id               
        ))
        
    const comments = commentsData.filter((ele) => (
            ItemId === ele?.postId               
        ))
    
    return (
        <Container>
            <SubContainer>
                {postsBody?.map((ele) => (
                    <PostsBox key={ele?.id}>
                        <TitleNameBox>            
                            <PostsTitle>{ele?.title}</PostsTitle>
                            <NameLengthBox>
                                <PostsName> 사용자 {ele?.userId}</PostsName>
                                <PostsLength>댓글 {comments?.length} 개</PostsLength>
                            </NameLengthBox>
                        </TitleNameBox>
                            <PostsBody>{ele?.body}</PostsBody>
                    </PostsBox>
                ))}
                {comments?.map((ele) => (
                    <CommentsBox key={ele?.id}>
                        <CommentsName>{ele?.name}</CommentsName>
                        <CommentsBody>{ele?.body}</CommentsBody>
                    </CommentsBox>
                ))}
            </SubContainer>
        </Container>
    )
}

export default React.memo(DetailPage);

const Container = styled.div``;

const SubContainer = styled.div`
margin: 50px;
padding: 10px;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`;

const PostsBox = styled.div`
margin: 10px;
background-color: #004c8c;
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`;

const TitleNameBox = styled.div`
/* border: 1px solid black; */
margin: 10px;
display: flex;
justify-content: space-between;
`;

const PostsTitle = styled.div`
/* border: 1px solid black; */
margin: 10px;
font-weight: bolder;
font-size: 30px;
color:#eceff1;
/* color: white; */
`;

const NameLengthBox = styled.div`
/* border: 1px solid black; */
display: flex;
margin: 15px;
`;

const PostsName = styled.div`
/* border: 1px solid black; */
margin: 5px;
font-size: 15px;
font-weight: bolder;
color: white;
`;

const PostsLength = styled.div`
/* border: 1px solid black; */
margin: 5px;
font-size: 15px;
font-weight: bolder;
color: white;

`;


const PostsBody = styled.div`
/* border: 1px solid black; */
font-size: 22px;
color: #eceff1;
/* font-weight: bolder; */
margin: 20px;
padding-bottom: 10px;
`;

const CommentsBox = styled.div`
/* border: 1px solid black; */
margin: 20px;
padding: 5px;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06); 
`;

const CommentsName = styled.div`
/* border: 1px solid black; */
margin: 10px;
font-weight: bolder;
font-size: 20px;
color: #102027;
`;

const CommentsBody = styled.div`
/* border: 1px soild black; */
margin: 10px;
font-size: 18px;
`;
