import React from 'react';
import "../styles/Home.css" 
import { Link, NavLink } from "react-router-dom"

function Homepage() {
    return (
        <div className="home-container">
            <header className="hero-section">
                <h1>Welcome to My Website Home page</h1>
                <p>Your go-to place for amazing content.</p>
            </header>

            <div style={{display:"flex",justifyContent:"center",justifyItems:"center",marginBottom:"0px",marginTop:"20px"}}>
                <NavLink to="/product" style={{background:"blue",border:"1px solid black",borderRadius:"40px",color:"white",height:"40px",width:"200px",paddingTop:"20px",textAlign:"center",textDecoration:"none"}}>Products</NavLink>
            </div>
          

            <section className="features">
                  
                <div className="feature-card">
                    <h2>Feature One</h2>
                    <p>This is an awesome feature that will blow your mind.</p>
                </div>
                <div className="feature-card">
                    <h2>Feature Two</h2>
                    <p>Another great feature to help you achieve greatness.</p>
                </div>
                <div className="feature-card">
                    <h2>Feature Three</h2>
                    <p>The final feature that ties everything together beautifully.</p>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
