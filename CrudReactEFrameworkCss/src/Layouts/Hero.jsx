import React from "react";

const Hero = ({ children }) => {
    return (
        <section className="hero">
            <div className="hero-body column has-text-centered">
                {children}
            </div>
        </section>
    )
}

export default Hero;