import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IndexPage from '../page';

describe('IndexPage', () => {
    it('renders a heading', () => {
        render(<IndexPage />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
    });
});
