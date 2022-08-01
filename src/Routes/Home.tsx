import React, {useState, useEffect} from 'react';
import styled from "styled-components"
import axios from 'axios';
import { useMatch, useNavigate } from "react-router-dom";
const BASE_PATH = "https://jsonplaceholder.typicode.com";

interface IpostsData {
    userId: number;
    id: number;
    title : string;
    body : string;
}

const Home = () => {
    const [postsData, setPostsData] = useState<IpostsData[]>([]);    
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getData()    
    }, [])
    
    const getData = async () => {
    try {
        const response = await axios.get(`${BASE_PATH}/posts`)
        const resMainData = await response?.data;
        setLoading(false);
        setPostsData(resMainData);
    } catch(err) {
        console.log("Error >>", err);
        }
    }

    const onTitleClick = (id:number) => {
        navigate(`/posts/${id}`);   
    }

    return (    
        loading ? (<div>Loading...</div>) :
        <Container>
            <SubContainer>            
                    {postsData?.map((ele) => (
                        <DataBox key={ele.id}>
                            <Title onClick={() => onTitleClick(ele.id)}>{ele.title}</Title>
                            <User>사용자 {ele.userId}</User>        
                        </DataBox>       
                    ))}                                                                                  
            </SubContainer>
        </Container>    
    )
}

const Container = styled.div`
/* border: 1px solid black; */
`;
const SubContainer = styled.div`
margin: 100px;
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