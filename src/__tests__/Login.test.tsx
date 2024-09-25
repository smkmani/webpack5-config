import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from "../components/Login";
describe("checking component loaded", () => {
  it("renders", () => {
    render(<Login />);
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
  });
});

test("checking email & password inputs are empty", () => {
  render(<Login />);
  expect(screen.queryByPlaceholderText("Email")).toHaveValue("");
  expect(screen.queryByPlaceholderText("Password")).toHaveValue("");
});
