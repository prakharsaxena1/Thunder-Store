import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { TextField } from './TextField';

const BrandLogo = styled.span`
    font-style: italic;
    letter-spacing: 1px;
    font-size: 26px;
`;

const AccountContainer = styled.div`
&&{
  min-width: 400px;
  max-width: 550px;
  height: 600px;
  background: rgba( 0, 0, 0, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.37 );
  backdrop-filter: blur( 6px );
  -webkit-backdrop-filter: blur( 6px );
}`;

const BetterButton = styled(Button)`
&& {
    min-width: 30%;
}
`;

const FormContainer = ({ ...props }) => {
    return (
        <Container fluid
            style={{
                height: "100vh",
                width: "100vw",
                padding: 0,
                background: "linear-gradient(to top right, #d5d5d5d0, #ffffff9c), url('/bg3.jpg')"
            }}>
            <Navbar variant="light">
                <Navbar.Brand as={Link} to="/" className="m-auto">
                    <BrandLogo>Thunder store</BrandLogo>
                </Navbar.Brand>
            </Navbar>
            <Container>
                <AccountContainer className=" mt-5 mx-auto p-5 rounded">
                    {props.children}
                </AccountContainer>
            </Container>
        </Container>
    )
}

const LoginService = () => {
    const validationObj = Yup.object({
        username: Yup.string().min(4, "Minimum 4 characters").required("Required"),
        password: Yup.string().min(8, "Minimum 8 characters").required("Required"),
    });

    return (
        <FormContainer>
            <h2 className='my-5 text-center'>Sign in to your account</h2>
            <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={validationObj}
                onSubmit={(value) => {
                    console.log(value);
                }}
            >
                {(formik) => (
                    <Form>
                        <TextField type="text" name="username" placeholder="Enter username" />
                        <TextField type="password" name="password" placeholder="Enter password" />
                        <Container className='d-flex justify-content-around mb-4 p-2'>
                            <BetterButton type='submit'>Login</BetterButton>
                        </Container>
                        <p className="text-muted text-center">New here? <Link to={'/account/register'}>Register</Link> an account</p>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    )
}

const RegisterService = () => {
    const validationObj = Yup.object({
        email: Yup.string().email("Invalid Email").required("Required"),
        username: Yup.string().min(4, "Minimum 4 characters").required("Required"),
        password: Yup.string().min(8, "Minimum 8 characters").required("Required"),
    });

    return (
        <FormContainer>
            <h2 className='my-4 text-center'>Register an account</h2>
            <Formik
                initialValues={{ username: "", password: "", email: "" }}
                validationSchema={validationObj}
                onSubmit={(value) => {
                    console.log(value);
                }}
            >
                {(formik) => (
                    <Form>
                        <TextField
                            type="email"
                            name='email'
                            placeholder="Enter email"
                        />
                        <TextField
                            type="text"
                            name='username'
                            placeholder="Enter username"
                        />
                        <TextField
                            type="password"
                            name='password'
                            placeholder="Enter password"
                        />
                        <Container className='d-flex justify-content-around mb-4'>
                            <BetterButton type='submit'>Register</BetterButton>
                        </Container>
                        <p className="text-muted">Already have an account? <Link to={'/account/login'}>Login</Link> to your account</p>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    )
}

const AccountPage = () => {
    return (
        <Routes>
            <Route path="login" element={<LoginService />} />
            <Route path="register" element={<RegisterService />} />
            <Route path="*" element={<Navigate to={'login'} />} />
        </Routes>
    )
}

export default AccountPage;