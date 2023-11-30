import React from "react";
import Navigation from "../navigation";
import Footer from "../Footer";
import About from "../About";
import Values from "../Values";
import Products from "../Products";
import Team from "../Team";
import Contact from "../Contacts";
import Header from "../LandingPage";
const Layout =()=>{
    return(
        <div>
            <Navigation/>
           <Header/>
            <About/>
            <Values/>
            <Products/>
            <Team/>
            <Contact/>
            <Footer/>    
        </div>
    )
}
export default Layout;   <Footer/>