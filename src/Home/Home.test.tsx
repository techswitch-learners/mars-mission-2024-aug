import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import "@testing-library/jest-dom";
import React, { useState } from "react";

test.skip("user's name is displayed on form submission", () => {
    const name = "Luigi";
    const [username, setUsername] = useState(name);

    render(<Home username={username} setUsername={setUsername}/>);

    const textArea = screen.getByLabelText(/Enter name:/);
    fireEvent.change(textArea, { target: { value: name }});

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    const welcomeMessage = screen.getByText(/Welcome Luigi!/i);
    expect(welcomeMessage).toBeInTheDocument();
})