import React from "react"

const Header = ({className, children}) => {

    return (
        <div className={`header ${className}`}>
            <div className="notification is-primary">
                {children}
            </div>
        </div>
    )
}

export default Header;