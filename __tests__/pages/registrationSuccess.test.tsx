import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import RegistrationSuccess from "../../pages/registrationSuccess";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("RegistrationSuccess", () => {
  it("should render the success message", () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: {
        user: JSON.stringify({}),
      },
    });

    render(<RegistrationSuccess />);

    expect(screen.getByText("Registration Successful!")).toBeInTheDocument();
  });

  it("should perform automatic login on button click and redirect to home page", async () => {
    const routerPushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      query: {
        user: JSON.stringify({ username: "testuser", password: "password" }),
      },
      push: routerPushMock,
    });

    (signIn as jest.Mock).mockResolvedValue({ ok: true });

    render(<RegistrationSuccess />);

    const button = screen.getByText("Log in");
    fireEvent.click(button);

    expect(signIn).toHaveBeenCalledTimes(1);
    expect(signIn).toHaveBeenCalledWith("credentials", {
      username: "testuser",
      password: "password",
      redirect: false,
    });

    setTimeout(() => {
      expect(routerPushMock).toHaveBeenCalledWith("/");
    }, 100);
  });

  it("should log an error if login fails", async () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: {
        user: JSON.stringify({ username: "testuser", password: "password" }),
      },
      push: jest.fn(),
    });

    (signIn as jest.Mock).mockResolvedValue({ ok: false });

    console.error = jest.fn();

    render(<RegistrationSuccess />);

    const button = screen.getByText("Log in");
    fireEvent.click(button);

    expect(signIn).toHaveBeenCalledTimes(1);
    expect(signIn).toHaveBeenCalledWith("credentials", {
      username: "testuser",
      password: "password",
      redirect: false,
    });

    setTimeout(() => {
      expect(console.error).toHaveBeenCalledWith("Failed to log in.");
    }, 100);
  });
});
