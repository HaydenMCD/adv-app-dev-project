import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignupComponent from '../../Components/SignupComponent';


test('Should render home page', () => {
    render(
        <Router>
            <SignupComponent />
        </Router>
    );

    // Elements
    const loginComponentTitle = screen.getByTestId('signupComponent-title');
    const loginComponentEmail = screen.getByTestId('signupComponent-emailInput');
    const loginComponentDisplayName = screen.getByTestId('signupComponent-displayName');
    const loginComponentPassword = screen.getByTestId('signupComponent-passwordInput');
    const loginComponentPasswordConf = screen.getByTestId('signupComponent-passwordConfInput');
    const loginComponentButton = screen.getByTestId('signupComponent-button');
    const loginComponentSignupText = screen.getByTestId('signupComponent-loginText');

    //Component title
    expect(loginComponentTitle).toBeInTheDocument();
    expect(loginComponentTitle).toHaveTextContent('Sign Up');
    //Component title
    expect(loginComponentEmail).toBeInTheDocument();
    expect(loginComponentEmail).toHaveTextContent('Email:');
    // Component email input
    expect(loginComponentDisplayName).toBeInTheDocument();
    expect(loginComponentDisplayName).toHaveTextContent('Display Name:');
    // Component password input
    expect(loginComponentPassword).toBeInTheDocument();
    expect(loginComponentPassword).toHaveTextContent('Password:');
    // Component password input
    expect(loginComponentPasswordConf).toBeInTheDocument();
    expect(loginComponentPasswordConf).toHaveTextContent('Confirm password:');
    // Component log in buttons
    expect(loginComponentButton).toBeInTheDocument();
    expect(loginComponentButton).toHaveTextContent('Sign up');
    // Component signup text
    expect(loginComponentSignupText).toBeInTheDocument();
    expect(loginComponentSignupText).toHaveTextContent("Already have an account? Login");
});