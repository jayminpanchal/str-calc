import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders form with input", () => {
    const { getByTestId } = render(<App />);

    const input = getByTestId("input-expression");
    const button = getByTestId("btn-calc");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
