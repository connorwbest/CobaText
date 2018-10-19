import React from 'react';

const Nav = ({children}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
             {children}
        </nav>
    );
};

export default Nav;