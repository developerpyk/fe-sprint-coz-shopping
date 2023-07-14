import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './header.css';
import logo from "../src/img/logo.png";
import hamburger from "../src/img/hamburger.png";
import products from "../src/img/products.png";
import bookmark from "../src/img/bookmark.png";
import DropdownItem from './component/Dropdown';

export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        // header-container가 flex conatainer임.
        <header className="header-container">
            <div className="logo-container">
                <div className="logo-img">
                    <Link to="/">
                        <img src={logo} alt="logo"></img>
                    </Link>
                </div>
                <Link to="/">
                    <h1 className="logo-title">COZ Shopping</h1>
                </Link>
            </div>
            <div className="hamburger-button" onClick={() => { setOpen(!open) }}>
                <img src={hamburger} alt="hamburger button"></img>
            </div>
            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                <ul>
                    <p>{"박윤경님, 안녕하세요!"}</p>
                    <DropdownItem href="/products/list" img={products} text={"상품리스트 페이지"} />
                    <DropdownItem href="/bookmark" img={bookmark} text={"북마크 페이지"} />

                </ul>
            </div>
        </header>
    );
}

