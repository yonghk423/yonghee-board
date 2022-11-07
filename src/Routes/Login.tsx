import React, { useState, useEffect } from 'react';
import useSWR, { SWRConfig } from 'swr'
import styled from "styled-components"
import { Link } from 'react-router-dom';
const Login = () => {    
    return (
        <Container>
            <LoginTitle>Login</LoginTitle>
            <Form>
                <EmailBox>
                    <input className='EmailInput' type="email" required></input>
                    <span></span>
                    <label className='Email'>이메일</label>
                </EmailBox>
                <PasswordBox>                    
                    <input className='PasswordInput' type="text" required></input>
                    <span></span>
                    <label className='Password'>비밀번호</label>
                </PasswordBox>
                <ForgotPassword>forgot password?</ForgotPassword>
                <Submit type="submit" value="Login"></Submit>
                <SignUpLink>
                    아직 회원이 아니신가요?
                    <Link to="/SignUp">
                        <LinkTitle>회원가입</LinkTitle>
                    </Link>
                </SignUpLink>
            </Form>
        </Container>
    )
}

export default Login;

const Container = styled.div`
/* border: 1px solid black; */
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 300px;
overflow: hidden;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`;

const LoginTitle = styled.h1`
font-size: 30px;
font-weight: bolder;
text-align: center;
padding: 0 0 20px 0;
border-bottom: 1px solid silver;
`;

const Form = styled.form`
/* border: 1px solid black; */
padding: 0 40px;
box-sizing: border-box;
`;

const EmailBox = styled.div`
/* border: 1px solid black; */
position: relative;
border-bottom: 2px solid silver;
margin: 30px 0%;
    .EmailInput {
    /* border: 1px solid black; */
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
    }    
    .Email {
    /* border: 1px solid black; */
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    }
    span::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #2691d9;
    transition: .5s;
    }
    input:focus ~ span::before,
    input:valid ~ span::before{
    width: 100%;
    }
`;

const PasswordBox = styled.div`
/* border: 1px solid black; */
position: relative;
border-bottom: 2px solid silver;
margin: 30px 0%;
    .PasswordInput {
    /* border: 1px solid black; */
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
    }
    .Password {
    /* border: 1px solid black; */
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;  
    }
    span::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #2691d9;
    transition: .5s;
    }
    input:focus ~ span::before,
    input:valid ~ span::before{
    width: 100%;
    }
    `;
const ForgotPassword = styled.div`
    margin: -5px 0 20px 5px;
    color: #a6a6a6;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`    
const Submit = styled.input`
width: 100%;
height: 50px;
border: 1px solid;
background: #2691d9;
border-radius: 25px;
font-size: 18px;
color: #e9f4fb;
font-weight: 700;
cursor: pointer;
outline: none;
&:hover {
    border-color: #2681d9;
    transition: .5s;
}
`;

const SignUpLink = styled.div`
margin: 30px 0;
text-align: center;
font-size: 16px;
color: #666666;
`;

const LinkTitle = styled.div`
color:#2681d9;
text-decoration: none;
&:hover {
    text-decoration: underline;
}
`;