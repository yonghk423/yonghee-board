import React, {useState, useEffect, useCallback} from 'react';
import styled from "styled-components"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Pagination from '../components/Pagination';
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
    //---------------------------------pagination----------------------------------------
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = useCallback((pageNumber:number) => {
        setCurrentPage(pageNumber)
    }, [currentPage])
    //------------------------------------------------------------------------------------

    useEffect(() => {
        getData()    
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
        
    const onTitleClick = useCallback((id:number) => {
        navigate(`/posts/${id}`);   
    }, [])
    
    return (     
        <Container>        
            <SubContainer>
                    {currentPosts?.map((ele) => (
                        <DataBox key={ele.id} onClick={() => onTitleClick(ele.id)}>
                            <Title>{ele.title}</Title>
                            <User>사용자 {ele.userId}</User>        
                        </DataBox>       
                    ))}                                                                                                
            </SubContainer>
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={postsData.length}
            paginate={paginate}
            />    
        </Container>    
    )
}

const Container = styled.div`
/* border: 1px solid black; */
`;
const SubContainer = styled.div`
margin: 20px;
padding: 5px;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`;
const DataBox = styled.div`
margin: 10px;
display: flex;
justify-content: space-between;
justify-items: center;
background-color: #0277bd;
border-radius: 10px;
cursor: pointer;
&:hover{  
    background-color : #58a5f0;
  }
`;
const Title = styled.div`
/* border: 1px solid black; */
margin: 10px;
color:#eceff1;
font-weight: bolder;
`;
const User = styled.div`
/* border: 1px solid black;  */
margin: 10px;
color:#eceff1;
font-weight: bolder;
`;
export default React.memo(Home);