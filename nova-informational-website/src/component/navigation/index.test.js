import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navigation from ".";

describe("Navigation Component", () => {
  test("renders navigation menu", () => {
    render(<Navigation />);
    

    const navMenu = screen.getByRole("navigation");
    expect(navMenu).toBeInTheDocument();

    
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();

 
    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toBeInTheDocument();

   
    const menu = screen.getByRole("navigation");
    expect(menu).not.toHaveClass("active");
  });
  test("renders correct names for menu links", () => {
    render(<Navigation />);
    
   
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveTextContent("Home");

    
    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toHaveTextContent("About");

    const valuesLink = screen.getByRole("link", { name: /values/i });
    expect(valuesLink).toHaveTextContent("Values");

   
    const productsLink = screen.getByRole("link", { name: /products/i });
    expect(productsLink).toHaveTextContent("Products");

    
    const teamLink = screen.getByRole("link", { name: /team/i });
    expect(teamLink).toHaveTextContent("Team");

   
    const contactLink = screen.getByRole("link", { name: /contact/i });
    expect(contactLink).toHaveTextContent("Contact");
  });
  
});

