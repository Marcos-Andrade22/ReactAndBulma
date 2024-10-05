import React from "react";

const Footer = ({ children }) => {
    return (
        <footer className="footer is-small" style={{padding: "5px 0"}}>
            {children}
        </footer>
    );
};

export default Footer;