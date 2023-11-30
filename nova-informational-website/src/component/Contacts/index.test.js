import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Contact from ".";

describe("Contact", () => {
  it("should render the contact form", () => {
    const { getByText, getByPlaceholderText } = render(<Contact />);
   
  
    expect(getByPlaceholderText("Name")).toBeInTheDocument();
    expect(getByPlaceholderText("Email")).toBeInTheDocument();
    expect(getByPlaceholderText("Message")).toBeInTheDocument();
    expect(getByText("Send")).toBeInTheDocument();
  });
  it("should update form data on input change", () => {
    const { getByPlaceholderText } = render(<Contact />);
  
    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(getByPlaceholderText("Message"), {
      target: { value: "Hello, this is a test message." },
    });
    
    expect(getByPlaceholderText("Name").value).toBe("John Doe");
    expect(getByPlaceholderText("Email").value).toBe("john@example.com");
    expect(getByPlaceholderText("Message").value).toBe(
      "Hello, this is a test message."
    );
  });
  


});


