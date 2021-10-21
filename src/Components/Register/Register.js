import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
// import useFirebase from '../../Hook/useFirebase';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false)
    const history = useHistory();
    const { setUser, handleCreatingUser } = useAuth();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        handleCreatingUser(email, password)
            .then((result) => {
                setUser(result.user);
                history.push('/login')
            })
    }

    return (
        <Form onSubmit={handleRegister} className='container w-50 mx-auto mt-5'>
            <h3>Create Account</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                {/* <p as={Link} to={email && password ? '/login' : '/register'}></p> */}
                Register
            </Button>
            <div>-------OR-------</div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onChange={() => setIsRegistered(!isRegistered)} type="checkbox" label="Already Registered?" />
                {isRegistered ? <Link to='/login'>Login</Link> : ''}
            </Form.Group>
        </Form>
    );
};

export default Register;