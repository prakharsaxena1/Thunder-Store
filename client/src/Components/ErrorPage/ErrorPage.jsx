import React from 'react'
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

const ErrCode = styled.h1`
font-size: 100px;
margin: 20px;
`;

const ErrMsg = styled.p`
font-size: 24px;
font-style: italics;
`;

const ErrorPage = () => {
  return (
    <Container fluid className="text-center p-5 bg-secondary text-light" style={{height: "100vh"}}>
      <img src="sad_gif" alt="sad_gif" style={{width: "25vw", minWidth: "320px" }}/>
      <ErrCode>404!</ErrCode>
      <ErrMsg>The page you are looking for does not exist..... <br />anyways wanna go back <Link to="/" style={{color: "white"}}>home</Link>?</ErrMsg>
    </Container>
  )
}

export default ErrorPage