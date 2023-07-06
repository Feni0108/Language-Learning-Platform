import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional DOM matchers
import { useSession } from 'next-auth/react';
import NavBar from '../../../components/nav/navbar';

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));

describe('NavBar', () => {
  it('should render navigation links when user is signed in', () => {
    const session = {
      user: {
        email: 'test@example.com',
      },
    };

    const mockUseSession = useSession as jest.Mock;
    mockUseSession.mockReturnValue({ data: session, status: 'authenticated' });

    render(<NavBar />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    const leaderboardLink = screen.getByRole('link', { name: /leaderboard/i });
    const friendsLink = screen.getByRole('link', { name: /friends/i });
    const contributionLink = screen.getByRole('link', { name: /contribution/i });

    expect(homeLink).toBeInTheDocument();
    expect(leaderboardLink).toBeInTheDocument();
    expect(friendsLink).toBeInTheDocument();
    expect(contributionLink).toBeInTheDocument();
  });
});