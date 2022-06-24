import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingPage from "../../Routes/LoadingPage";

afterEach(() => {
    cleanup();
});

test('Should render singup components ', () => {
    render(
        <Router>
            <LoadingPage />
        </Router>
    );

    // Elements
    const loadingPageSpinner = screen.getByTestId('loadingPage-spinner');
    const loadingPageText = screen.getByTestId('loadingPage-text');

    expect(loadingPageSpinner);
    expect(loadingPageText).toHaveTextContent("Loading...");
});
