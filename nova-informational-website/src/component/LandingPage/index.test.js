import React from "react";
import { render } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("should render the header with the correct content", () => {
    const { getByText, getByRole } = render(<Header />);

    
    
    expect(getByText("WELCOME TO TRUX")).toBeInTheDocument();
    expect(getByText("Making your journey smooth and fast")).toBeInTheDocument();
    expect(getByRole("link", { name: "Download App" })).toBeInTheDocument();
  });

 

  it("should have a valid link", () => {
    const { getByRole } = render(<Header />);
    
    const downloadLink = getByRole("link", { name: "Download App" });
    expect(downloadLink).toHaveAttribute("href", "#download");
  });
});
