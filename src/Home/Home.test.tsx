import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import "@testing-library/jest-dom";

test("user's name is displayed on form submission", () => {
    render(<Home />);

    const name = "Luigi";
    const textArea = screen.getByLabelText(/Enter name:/);
    fireEvent.change(textArea, { target: { value: name }});

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    const welcomeMessage = screen.getByText(/Welcome Luigi!/i);
    expect(welcomeMessage).toBeInTheDocument();
})