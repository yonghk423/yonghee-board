import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import axios from 'axios';

interface ImainData {
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

const Home = () => {
    const [mainData, setMainData] = useState<ImainData[]>([]);
    console.log(mainData);
    const [detailData, setDetailData] = useState<IdetailData[]>([]);
    console.log(detailData);
    const [detailPage, setDetailPage] = useState(false);
    console.log(detailPage);
    useEffect(() => {
       getData()
       getDetailData()
    } , [])
    
    const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response);
        const resMainData = await response?.data;
        setMainData(resMainData);
       
    } catch(err) {
        console.log("Error >>", err);
        }
    }
     const getDetailData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
        console.log(response);
        const resDetailData = await response?.data;
        setDetailData(resDetailData);
       
    } catch(err) {
        console.log("Error >>", err);
        }
    }

    const onTitleClick = (id:number) => {
        console.log(id);
        const data = detailData.filter((ele) => (
            id === ele?.postId        
        ))
        console.log(data);
        setDetailData(data);
        setDetailPage(true);
    }

    return (
        <>
        <Container>
            <SubContainer>            
                    {mainData.map((ele) => (
                        <DataBox key={ele.id}>
                            <Title onClick={() => onTitleClick(ele.id)}>{ele.title}</Title>
                            <User>사용자 {ele.userId}</User>
                            {detailPage === true ? 
                                <div>
                                    <div>test</div>
                                    <button onClick={() =>setDetailPage(false)}></button>
                                </div> : null
                            }        
                        </DataBox>      
                    ))}                                           
            </SubContainer>
        </Container>
                 
        </>
    )
}

const Container = styled.div`
border: 1px solid black;
`;
const SubContainer = styled.div`
margin: 100px;
/* border: 1px solid black; */
background-color: rgba(225, 225, 225, 0.2);
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px     rgba(0, 0, 0, 0.06);  
`;
const DataBox = styled.div`
margin: 10px;
display: flex;
justify-content: space-between;
`;
const Title = styled.div`
border: 1px solid black;
margin: 10px;
`;
const User = styled.div`
border: 1px solid black; 
margin: 10px;
`;
export default Home;