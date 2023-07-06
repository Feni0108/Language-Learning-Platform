import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { signOut } from 'next-auth/react';
import i18n from '@/i18n/i18n';
import SignOutButton from '../../../components/ChildComponent/SignOutButton';

jest.mock('next-auth/react', () => ({
  signOut: jest.fn(),
}));

jest.mock('@/i18n/i18n', () => ({
  changeLanguage: jest.fn(),
  t: jest.fn((key: string) => key), 
}));

describe('SignOutButton', () => {
  it('should signOut and changeLanguage to defult when clicked', async () => {
    render(<SignOutButton />);

    const signOutButton = screen.getByRole('button', { name: /sign_out/i });

    await fireEvent.click(signOutButton);

    expect(signOut).toHaveBeenCalledWith({ callbackUrl: '/' });
    expect(i18n.changeLanguage).toHaveBeenCalledWith('en');
  });
});