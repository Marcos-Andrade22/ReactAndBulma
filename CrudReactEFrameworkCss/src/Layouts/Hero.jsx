import React from "react";

const Hero = ({ children }) => {
    return (
        <section class="hero">
            <div class="hero-body column has-text-centered">
                {children}
            </div>
        </section>
    )
}

export default Hero;