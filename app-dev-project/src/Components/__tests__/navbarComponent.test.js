import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarComponent from '../../Components/NavbarComponent';


test('Should render nav bar not logged in', () => {
    render(
        <Router>
            <NavbarComponent />
        </Router>
    );
        // Elements
        const navbarComponentTitle = screen.getByTestId('navbarComponent-title');
        const navbarComponentLogin = screen.getByTestId('navbarComponent-login');
        const navbarComponentSignup = screen.getByTestId('navbarComponent-signup');

        expect(navbarComponentTitle).toHaveTextContent('PokerProject');
        expect(navbarComponentLogin).toHaveTextContent('login');
        expect(navbarComponentSignup).toHaveTextContent('signup');
});

test('Should render nav bar logged in', () => {
    const isLoggedIn = {isLoggedIn: true}

    render(
        <Router>
            <NavbarComponent isLoggedIn={isLoggedIn}/>
        </Router>
    );

        // Elements
        const navbarComponentTitle = screen.getByTestId('navbarComponent-title');
        const navbarComponentGames = screen.getByTestId('navbarComponent-games');
        const navbarComponentCreateGames = screen.getByTestId('navbarComponent-createGames');
        const navbarComponentHow = screen.getByTestId('navbarComponent-how');

        expect(navbarComponentTitle).toHaveTextContent('PokerProject');
        expect(navbarComponentGames).toHaveTextContent('Games');
        expect(navbarComponentCreateGames).toHaveTextContent('Create Game');
        expect(navbarComponentHow).toHaveTextContent('How to play?');
});