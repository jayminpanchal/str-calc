import { fireEvent, render } from "@testing-library/react";
import App from "./App";
import { act } from "react";

describe("App", () => {
  it("renders form with input", () => {
    const { getByTestId } = render(<App />);

    const input = getByTestId("input-expression");
    const button = getByTestId("btn-calc");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should calulate the number with comma separated", () => {
    const { getByText, getByTestId } = render(<App />);

    const input = getByTestId("input-expression");
    const button = getByTestId("btn-calc");

    act(() => {
      fireEvent.change(input, { target: { value: "2,3,4,5" } });
    });

    fireEvent.click(button);
    const element = getByText('Output: 14');
    expect(element).toBeInTheDocument();
  });

  it("should calulate the number with empty values", () => {
    const { getByText, getByTestId } = render(<App />);

    const input = getByTestId("input-expression");
    const button = getByTestId("btn-calc");

    act(() => {
      fireEvent.change(input, { target: { value: "2,3,4,5," } });
    });

    fireEvent.click(button);
    const element = getByText('Output: 14');
    expect(element).toBeInTheDocument();
  });

  it("should calulate the number with empty values", () => {
    const { getByText, getByTestId } = render(<App />);

    const input = getByTestId("input-expression");
    const button = getByTestId("btn-calc");

    act(() => {
      fireEvent.change(input, { target: { value: "2,3,4,5," } });
    });

    fireEvent.click(button);
    const element = getByText('Output: 14');
    expect(element).toBeInTheDocument();
  });

  it("should calulate the number with new lines and extra spaces", () => {
    const { getByText, getByTestId } = render(<App />);

    const input = getByTestId("input-expression");
    const button = getByTestId("btn-calc");

    act(() => {
      fireEvent.change(input, { target: { value: "2,3,4,5,\n,6 " } });
    });

    fireEvent.click(button);
    const element = getByText('Output: 20');
    expect(element).toBeInTheDocument();
  });

  it("should throw error for negative number", () => {
    const { getByText, getByTestId } = render(<App />);

    const input = getByTestId("input-expression");
    const button = getByTestId("btn-calc");

    act(() => {
      fireEvent.change(input, { target: { value: "1,2,3,4,-5,-6" } });
    });

    fireEvent.click(button);
    const element = getByText('negative numbers not allowed -5');
    expect(element).toBeInTheDocument();
  });

  it("should parse pattern with custom delimeter", () => {
    const { getByText, getByTestId } = render(<App />);

    const input = getByTestId("input-expression");
    const button = getByTestId("btn-calc");

    act(() => {
      fireEvent.change(input, { target: { value: "//;\\n3;2;5;6;7" } });
    });

    fireEvent.click(button);
    const element = getByText('Output: 23');
    expect(element).toBeInTheDocument();
  });
});
