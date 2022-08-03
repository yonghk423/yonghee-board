import React from 'react';
import styled from "styled-components"

interface Iprops {
    postsPerPage: number;
    totalPosts: number
    paginate: (pageNumber: number) => void
}

const Pagination = (props:Iprops) => {
    
  const pageNumbers:number[] = [];
    for (let i = 1; i <= Math.ceil(props?.totalPosts / props?.postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
    <Container>
      <SubContainer>
        {pageNumbers?.map((number) => (
          <NumberBox key={number}>
            <NumberList onClick={() => props.paginate(number)}>
              <Number>{number}</Number>
            </NumberList>
          </NumberBox>
        ))}
      </SubContainer>
    </Container>
    );
};

export default React.memo(Pagination);

const Container = styled.div`
`;

const SubContainer = styled.div`
margin: 50px;
display: flex;
justify-content: center;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 10px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`;

const NumberBox = styled.div`
margin: 10px;
cursor: pointer;
filter: brightness(60%);
    position: relative;        
    height: 25px;
    width: 25px;
    border-radius: 5px;
    text-align: center;
    &:hover {
      filter: brightness(105%);
      transform: scale(1.2);
      transition: transform .5s;
      color: #004c8c;
    }
`;

const NumberList = styled.div`
`;

const Number = styled.div`
font-size: 20px;
font-weight: bolder;
cursor: pointer;

`;