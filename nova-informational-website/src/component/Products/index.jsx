import React from "react";
import "./style.css";

const Products = () => {
  return (
    <div className="products">
      <div className="text">
        <div className="product-text">
          <h2>Our Products</h2>
          <p>
            Experience hassle-free border clearance like never before with our
            Driver Document Verification App. Say goodbye to long queues and
            paperwork. Our intuitive mobile application allows drivers to
            conveniently upload and submit their documents for verification,
            eliminating unnecessary delays. With just a few taps, you can
            securely transmit your identity proofs and vehicle registration
            documents, ensuring a seamless and efficient process. Download our
            app today and enjoy a smoother journey across borders. Your
            documents, verified in an instant.
          </p>
          
          <button className="download-app-button">Download App</button>
        </div>
      </div>
      <div>
        <img
          src="img/image/products.png"
          className="img-fluid"
          alt="products"
        />
      </div>
    </div>
  );
};

export default Products;
