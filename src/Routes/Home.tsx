import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import axios from 'axios';
const Home = () => {
    const [mainData, setMainData] = useState('');
    console.log(mainData);
    useEffect(() => {
       getData()
    } , [])
    const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const resMainData = await response?.data;
        setMainData(resMainData);
       
    } catch(err) {
        console.log("Error >>", err);
    }
    }
    return (
        <Container>
            <SubContainer>
                <DataBox>          
                    <Title>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</Title>
                    <User>작성자 1</User>
                </DataBox>
                <DataBox>          
                    <Title>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</Title>
                    <User>작성자 1</User>
                </DataBox>  
                <DataBox>          
                    <Title>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</Title>
                    <User>작성자 1</User>
                </DataBox>
                <DataBox>          
                    <Title>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</Title>
                    <User>작성자 1</User>
                </DataBox>
                <DataBox>          
                    <Title>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</Title>
                    <User>작성자 1</User>
                </DataBox>  
                <DataBox>          
                    <Title>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</Title>
                    <User>작성자 1</User>
                </DataBox>                      
            </SubContainer>
        </Container>
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