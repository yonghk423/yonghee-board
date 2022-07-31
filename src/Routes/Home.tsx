import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useMatch, useNavigate } from "react-router-dom";
const BASE_PATH = "https://jsonplaceholder.typicode.com";

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
interface Iprops {
    userId? : number;
    id? : number;
    title? : string;
    body? : string;
}

const Home = (props : Iprops ) => {
    console.log(props);    
    const [expanded, setExpanded] = useState(false);  
    const [commentsData, setCommentsData] = useState<IcommentsData[]>([]);
    const [detailData, setDetailData] = useState<IdetailData[]>([])
    console.log(detailData); 
    const navigate = useNavigate();
    const dataMatch = useMatch("/posts/:postId");
    console.log(dataMatch) 

     useEffect(() => {
        getDetailData()
     }, [detailData])
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
    const onTitleClick = (id:number) => {
        navigate(`/posts/${id}`);
        console.log(id);
        const data = commentsData.filter((ele) => (
            id === ele?.postId        
        ))
        setDetailData(data);
    }  
    
    return (
        <div>
            <div>
                <div onClick={() => {
                    setExpanded(!expanded)
                    onTitleClick(props.id!)
                }                
                }>
                    <div>{props?.title}</div>
                    <div>사용자 {props?.userId}</div>
                </div>           
            </div>
            {expanded && detailData.map((ele)=> (
                <div key={ele.id}>
                    <div>{ele.name}</div>
                    <div>{ele.body}</div>                                
                </div>    
            ))}
        </div>
    )
   
}
export default Home;

//--------------------------------------------------------------------------------------------------------------------
// import styled from "styled-components"
// import axios from 'axios';
// import { useMatch, useNavigate } from "react-router-dom";
// const BASE_PATH = "https://jsonplaceholder.typicode.com";

// interface IpostsData {
//     userId: number;
//     id: number;
//     title : string;
//     body : string;
// }
// interface IdetailData {
//     postId: number;
//     id: number;
//     name: string;
//     email: string;
//     body: string;
// }

// interface IcommentsData {
//     postId: number;
//     id: number;
//     name: string;
//     email: string;
//     body: string;
// }

// const Home = () => {
//     const [postsData, setPostsData] = useState<IpostsData[]>([]);
//     const [commentsData, setCommentsData] = useState<IcommentsData[]>([]);
//     // const [detailPage, setDetailPage] = useState(false);
//     // console.log(detailPage);
//     const [detailData, setDetailData] = useState<IdetailData[]>([])
//     console.log(detailData);
//     const navigate = useNavigate();
//     const dataMatch = useMatch("/posts/:postId");
//     console.log(dataMatch)
//     useEffect(() => {
//         getData()
        
//     } , [])
//     useEffect(() => {
//         getDetailData()
//     }, [detailData])
//     const getData = async () => {
//     try {
//         const response = await axios.get(`${BASE_PATH}/posts`)
//         // console.log(response);
//         const resMainData = await response?.data;
//         setPostsData(resMainData);
       
//     } catch(err) {
//         console.log("Error >>", err);
//         }
//     }
//      const getDetailData = async () => {
//     try {
//         const response = await axios.get(`${BASE_PATH}/comments`)
//         // console.log(response);
//         const resDetailData = await response?.data;
//         setCommentsData(resDetailData);
       
//     } catch(err) {
//         console.log("Error >>", err);
//         }
//     }

//     const onTitleClick = (id:number) => {
//         navigate(`/posts/${id}`);
//         console.log(id);
//         const data = commentsData.filter((ele) => (
//             id === ele?.postId        
//         ))
//         setDetailData(data);
//         // setDetailPage(true);
//     }

//     return (
//         <>
//         <Container>
//             <SubContainer>            
//                     {postsData?.map((ele) => (
//                         <DataBox key={ele.id}>
//                             <Title onClick={() => onTitleClick(ele.id)}>{ele.title}</Title>
//                             <User>사용자 {ele.userId}</User>        
//                         </DataBox>       
//                     ))}
//                     {dataMatch ? detailData.map((ele) => (
//                         <div key={ele.id}>
//                             <div>{ele.name}</div>
//                             <div>{ele.body}</div>                                
//                         </div>    
//                     )) : null
//                     }                                                                  
//             </SubContainer>
//         </Container>             
//         </>
//     )
// }

// const Container = styled.div`
// border: 1px solid black;
// `;
// const SubContainer = styled.div`
// margin: 100px;
// /* border: 1px solid black; */
// background-color: rgba(225, 225, 225, 0.2);
// border-radius: 15px;
// box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px     rgba(0, 0, 0, 0.06);  
// `;
// const DataBox = styled.div`
// margin: 10px;
// display: flex;
// justify-content: space-between;
// `;
// const Title = styled.div`
// border: 1px solid black;
// margin: 10px;
// `;
// const User = styled.div`
// border: 1px solid black; 
// margin: 10px;
// `;
// export default Home;