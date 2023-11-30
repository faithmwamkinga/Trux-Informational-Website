import React from "react";
import { render, screen } from "@testing-library/react";
import Team from ".";

describe("Team Component", () => {
  test("renders the Meet the Team heading", () => {
    render(<Team />);
    const headingElement = screen.getByText("Meet the Team");
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the team introduction text", () => {
    render(<Team />);
    const introTextElement = screen.getByText(
      "We are a team of great engineers aimed to provide great services and experience with the app"
    );
    expect(introTextElement).toBeInTheDocument();
  });

 
});
