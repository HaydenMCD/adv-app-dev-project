import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from '../../Routes/routePaths';
import LoginComponent from '../LoginComponent';


test('Should render login component', () => {
    render(
        <Router>
            <LoginComponent />
        </Router>
    );
    // Elements
    const loginComponent = screen.getByTestId('loginComponent');
    const loginComponentTitle = screen.getByTestId('loginComponent-title');
    const loginComponentEmail = screen.getByTestId('loginComponent-emailInput');
    const loginComponentPassword = screen.getByTestId('loginComponent-passwordInput');
    const loginComponentButton = screen.getByTestId('loginComponent-button');
    const loginComponentSignupText = screen.getByTestId('loginComponent-signupText');

    //Entire component rendered
    expect(loginComponent).toBeInTheDocument();
    //Component title
    expect(loginComponentTitle).toBeInTheDocument();
    expect(loginComponentTitle).toHaveTextContent('Log In');
    // Component email input
    expect(loginComponentEmail).toBeInTheDocument();
    expect(loginComponentEmail).toHaveTextContent('Email');
    // Component password input
    expect(loginComponentPassword).toBeInTheDocument();
    expect(loginComponentPassword).toHaveTextContent('Password');
    // Component log in button
    expect(loginComponentButton).toBeInTheDocument();
    expect(loginComponentButton).toHaveTextContent('Log In');
    // Component signup text
    expect(loginComponentSignupText).toBeInTheDocument();
    expect(loginComponentSignupText).toHaveTextContent("Don't have an account? Sign Up");
});