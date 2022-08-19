import React from 'react';
import {Link} from 'react-router-dom';
import '../style/Header.css'


const Header = () => {
    return (
        <div className="header">
            <h1>Kiara Bates</h1>
            <div className="header__nav">
                <ul>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/projects'}>Projects</Link>
                    <Link to={'/contact'}>Contact</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;