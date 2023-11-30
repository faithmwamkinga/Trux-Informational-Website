import React from "react";
import { render } from "@testing-library/react";
import Products from ".";

test("displays the correct text", () => {
    const { getByText } = render(<Products />);
    const headingElement = getByText("Our Products");
    const paragraphElement = getByText(
        "Experience hassle-free border clearance like never before with our Driver Document Verification App. Say goodbye to long queues and paperwork. Our intuitive mobile application allows drivers to conveniently upload and submit their documents for verification, eliminating unnecessary delays. With just a few taps, you can securely transmit your identity proofs and vehicle registration documents, ensuring a seamless and efficient process. Download our app today and enjoy a smoother journey across borders. Your documents, verified in an instant."
        
    );
  
    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
  
  