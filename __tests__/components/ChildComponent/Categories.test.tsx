import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import Categories from "../../../components/ChildComponent/Categories";

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

describe("Categories", () => {
  it("should render category button", () => {
    render(
      <Categories
        progress={50}
        progressLimit={100}
        type="Category"
        displayType="Category Display"
      />
    );

    const categoryButton = screen.getByRole("button", {
      name: /category-icon/i,
    });

    expect(categoryButton).toBeInTheDocument();
    expect(categoryButton.textContent).toBe("Category-icon");
  });

  it("should handle click event and navigates to correct path", () => {
    render(
      <Categories
        progress={100}
        progressLimit={100}
        type="Category"
        displayType="Category Display"
      />
    );

    const categoryButton = screen.getByRole("button", {
      name: /category-icon/i,
    });

    fireEvent.click(categoryButton);

    expect(mockRouterPush).toHaveBeenCalledWith(
      {
        pathname: "/lessons/category",
        query: { type: "Category", isProgressUpdate: true },
      },
      "/lessons/category"
    );
  });
});
