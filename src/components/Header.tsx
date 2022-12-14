import React from 'react';
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const onClick = () => {
      navigate("/Home")
      
    }
    return (
        <HeaderBox>             
             <Head style={{ textDecoration: 'none', color: 'white' }} onClick={onClick}>yonghee'board</Head>                       
        </HeaderBox>
    )
}

export default React.memo(Header);

const HeaderBox = styled.div`
    max-width: 100%;
    max-height: 100%;
    background-color:#002f6c;
    display: flex;
    height: 50px;
    width: 100%;
`;

const Head = styled.div`
    color: white;
    position: relative;
    padding: 16px 24px;
    font-size: 20px;
    font-weight: bolder;
    cursor: pointer;    
`;