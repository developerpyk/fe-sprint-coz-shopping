import React from 'react';
import './header.css';

export default function Header() {
    
    return (
        // header-container가 flex conatainer임.
        <header className="header-container">
            <div className="logo-container">
                <div className="logo-img"> 
                <img src="logo.png" alt="logo" />
                </div>
                <span className="logo-title">COZ Shopping</span>
            </div>
            <div className="hamburger-button">
            <img src="hamburger.png" alt="hamburger button" />
            </div>
        </header>
    );
}
