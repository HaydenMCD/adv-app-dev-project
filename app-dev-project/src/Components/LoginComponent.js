import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routes } from '../Routes/routePaths';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const LoginComponent = ({
    authError,
    isLoggedIn,
    setUser,
    setIsLoggedIn,
    setAuthError,
    auth,
}) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e) {
        setIsLoading(true)
        e.preventDefault();
        await signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((User) => {
                setUser(User.user);
                setIsLoggedIn(true);
                if (isLoggedIn) {
                    setIsLoading(false)
                    history.replace(routes.HOME);
                } else {
                    setIsLoading(false)
                    throw new Error('User is not logged in');
                }
            })
            .catch((error) => {
                setUser(null);
                setIsLoggedIn(false);
                setAuthError(error.message);
            });
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4' data-testid="loginComponent-title">Log In</h2>
                    {authError && (
                        <Alert variant='danger'>{authError}</Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email' data-testid="loginComponent-email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                ref={emailRef}
                                required
                                data-testid="loginComponent-emailInput"/>
                        </Form.Group>
                        <Form.Group id='password' data-testid="loginComponent-password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                ref={passwordRef}
                                required
                                data-testid="loginComponent-passwordInput"
                            />
                        </Form.Group>
                        <Button disabled={isLoading} className='w-100' type='submit' data-testid="loginComponent-button">
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2' data-testid="loginComponent-signupText">
                Don't have an account? <Link to={routes.SIGNUP}> Sign Up </Link>
            </div>
        </>
    );
};

export default LoginComponent;
