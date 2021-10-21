import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle, handleUserLogin, setUser } = useAuth();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const history = useHistory();
    const location = useLocation();

    const redirect_url = location.state?.from || './home'

    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setUserPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        handleUserLogin(userEmail, userPassword)
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                setUser(result.user)
                history.push(redirect_url)
            })
    }

    return (
        <div className='text-center mb-5'>
            <Form onSubmit={handleLogin} className='container w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <br />
                <p>New to Dazzle Dentistry? <Link to='/register'>Register: Fill Up the Form</Link></p>
                <div>-----OR------</div>
                <br />
            </Form>
            <Button onClick={handleGoogleLogin}>Google Sign in</Button>
        </div>

    );
};

export default Login;