import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignupComponent from '../SignupComponent';

afterEach(() => {
    cleanup();
});

test('Should render singup components ', () => {
    render(
        <Router>
            <SignupComponent />
        </Router>
    );

    // Elements
    const loginComponentTitle = screen.getByTestId('signupComponent-title');
    const loginComponentEmail = screen.getByTestId('signupComponent-email');
    const loginComponentDisplayName = screen.getByTestId('signupComponent-displayName');
    const loginComponentPassword = screen.getByTestId('signupComponent-password');
    const loginComponentPasswordConf = screen.getByTestId('signupComponent-passwordConf');
    const loginComponentButton = screen.getByTestId('signupComponent-button');
    const loginComponentSignupText = screen.getByTestId('signupComponent-loginText');

    expect(loginComponentTitle).toHaveTextContent('Sign Up');
    expect(loginComponentEmail).toHaveTextContent('Email:');
    expect(loginComponentDisplayName).toHaveTextContent('Display Name:');
    expect(loginComponentPassword).toHaveTextContent('Password:');
    expect(loginComponentPasswordConf).toHaveTextContent('Confirm password:');
    expect(loginComponentButton).toHaveTextContent('Sign up');
    expect(loginComponentSignupText).toHaveTextContent("Already have an account? Login");
});

test('Should render home page', () => {
    const emailInput = "test@test.com";
    const nameInput = "test name";
    const passwordInput = "password";

    render(
        <Router>
            <SignupComponent />
        </Router>
    );

    // Elements
    const loginComponentEmailInput = screen.getByTestId('signupComponent-emailInput');
    const loginComponentDisplayNameInput = screen.getByTestId('signupComponent-displayNameInput');
    const loginComponentPasswordInput = screen.getByTestId('signupComponent-passwordInput');
    const loginComponentPasswordConfInput = screen.getByTestId('signupComponent-passwordConfInput');
    const loginComponentButtonInput = screen.getByTestId('signupComponent-button');

    fireEvent.change(loginComponentEmailInput,{target: {value: emailInput}});
    fireEvent.change(loginComponentDisplayNameInput,{target: {value: nameInput}});
    fireEvent.change(loginComponentPasswordInput,{target: {value: passwordInput}});
    fireEvent.change(loginComponentPasswordConfInput,{target: {value: passwordInput}});

    expect(loginComponentEmailInput.value).toBe('test@test.com')
    expect(loginComponentDisplayNameInput.value).toBe('test name')
    expect(loginComponentPasswordInput.value).toBe('password')
    expect(loginComponentPasswordConfInput.value).toBe('password')
    expect(loginComponentButtonInput).toBeEnabled();
});