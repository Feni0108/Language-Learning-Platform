import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from "next/router";
import SignUpButton from '../../../components/ChildComponent/SignUpButton';

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

let mockRouterPush: jest.Mock;

beforeEach(() => {
  mockRouterPush = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({
    push: mockRouterPush,
  });
});

describe('SignUpButton', () => {

  it('should render a correct text content on the buttons', () => {
    render(<SignUpButton />);

    const signUpButton = screen.getByRole('link', { name: /sign up/i });
    const existingAccountLink = screen.getByRole('link', { name: /I already have an account/i });

    expect(signUpButton.textContent).toBe('Sign up!');
    expect(existingAccountLink.textContent).toContain('I already have an account!');
  });

  it('should navigate to sign up page when clicked', () => {
    render(<SignUpButton />);

    const signUpButton = screen.getByRole("link", {
      name: /Sign up!/i,
    });

    fireEvent.click(signUpButton);

    setTimeout(() => {
      expect(mockRouterPush).toHaveBeenCalledWith('/auth/signup');
    }, 100); 
  })
});






