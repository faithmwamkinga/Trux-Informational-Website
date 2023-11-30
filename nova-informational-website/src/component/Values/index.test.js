import React from "react";
import { render } from "@testing-library/react";
import Values from ".";

test("renders without errors", () => {
  render(<Values />);
});

test("renders the 'Team Work' value correctly", () => {
  const { getByText } = render(<Values />);
  const teamWorkValue = getByText("Team Work");
  const teamElement = getByText(
    "We embrace collaboration, harnessing diverse talents to achieve common goals and create impact solution"
  );

  expect(teamWorkValue).toBeInTheDocument();
  expect(teamElement).toBeInTheDocument();
});

test("renders the 'Empathy' value correctly", () => {
  const { getByText } = render(<Values />);
  const empathyValue = getByText("Empathy");
  const empathyElement = getByText(
    "We prioritize understanding and connecting with the needs and experiences of others"
  );

  expect(empathyValue).toBeInTheDocument();
  expect(empathyElement).toBeInTheDocument();
});

test("renders the 'Growth' value correctly", () => {
  const { getByText } = render(<Values />);
  const growthValue = getByText("Growth");
  const growthElement = getByText(
    "We embrace continous learning adapting to challenges and evolving our solutions with a growth mindset we strive to create lasting positive impact"
  );

  expect(growthValue).toBeInTheDocument();
  expect(growthElement).toBeInTheDocument();
});