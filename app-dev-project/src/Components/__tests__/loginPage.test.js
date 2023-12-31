import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '../../Routes/LoginPage';

afterEach(() => {
    cleanup();
});

test('Should render login components', () => {
    render(
        <Router>
            <LoginPage />
        </Router>
    );
    
    // Elements
    const loginComponentTitle = screen.getByTestId('loginComponent-title');
    const loginComponentEmail = screen.getByTestId('loginComponent-email');
    const loginComponentPassword = screen.getByTestId('loginComponent-password');
    const loginComponentButton = screen.getByTestId('loginComponent-button');
    const loginComponentSignupText = screen.getByTestId('loginComponent-signupText');

    expect(loginComponentTitle).toHaveTextContent('Log In');
    expect(loginComponentEmail).toHaveTextContent('Email');
    expect(loginComponentPassword).toHaveTextContent('Password');
    expect(loginComponentButton).toHaveTextContent('Log In');
    expect(loginComponentSignupText).toHaveTextContent("Don't have an account? Sign Up");
});


test('Can edit login text inputs', () => {
    const emailInput = "test@gmail.com";
    const passwordInput = "testpass";
    render(
        <Router>
            <LoginPage />
        </Router>
    );
    
    // Elements
    const loginComponentEmail = screen.getByTestId('loginComponent-emailInput');
    const loginComponentPassword = screen.getByTestId('loginComponent-passwordInput');
    const loginComponentButton = screen.getByTestId('loginComponent-button');

    fireEvent.change(loginComponentEmail,{target: {value: emailInput}});
    fireEvent.change(loginComponentPassword,{target: {value: passwordInput}});
    expect(loginComponentButton).toBeEnabled();
});