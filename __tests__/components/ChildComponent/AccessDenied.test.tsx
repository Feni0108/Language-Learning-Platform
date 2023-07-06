import React, { ReactNode } from 'react';
import "@testing-library/jest-dom/extend-expect";
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import AccessDenied from '../../../components/ChildComponent/AccessDenied';

jest.mock('next/link', () => {
  const NextLinkMock = ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );

  NextLinkMock.displayName = 'NextLinkMock';

  NextLinkMock.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
  };

  return {
    __esModule: true,
    default: NextLinkMock,
  };
});

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('AccessDenied', () => {
  it('should render access denied message', () => {
    render(<AccessDenied />);

    const accessDeniedMessage = screen.getByRole('heading', { name: /you are not logged in/i });

    expect(accessDeniedMessage).toBeInTheDocument();
  });

  it('should render login link with correct text and href', () => {
    render(<AccessDenied />);

    const loginLink = screen.getByText(/click here to view login page/i);

    expect(loginLink).toHaveAttribute('href', '/auth/signin');
  });

  it('should navigate to login page when login link is clicked', () => {
    const mockRouterPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockRouterPush,
    });

    render(<AccessDenied />);

    const loginLink = screen.getByText(/click here to view login page/i);

    loginLink.click();

    setTimeout(() => {
      expect(mockRouterPush).toHaveBeenCalledWith('/auth/signin');
    }, 100); 
  });
});