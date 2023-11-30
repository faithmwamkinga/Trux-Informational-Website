import React from "react";
import "./style.css"; 

const Header = () => {
  return (
    <header id="header">
      <div className="intro">
      <div className="container">
      <div className="overlay">
          <div className="container">
            <div className="row">
              <div >
                <h1 className="headers">
                  <span className="welcome">WELCOME TO TRUX</span>
                </h1>
                <hr className="line" />
                <p className="fast"> Making your journey smooth and fast </p>
                <a
                  href="#download"
                  className=" download-button"
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
    </header>
  );
};

export default Header;
