import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom"
import './header.css';
import logo from "../img/logo.png"
import hamburger from "../img/hamburger.png"
import products from "../img/products.png"
import bookmark from "../img/bookmark.png"

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
                    <Link to="/products/list">
                        <DropdownItem img={products} text={"상품리스트 페이지"} />
                    </Link>
                    <Link to="/bookmark">
                        <DropdownItem img={bookmark} text={"북마크 페이지"} />
                    </Link>
                </ul>
            </div>
        </header>
    );
}


function DropdownItem(props) {
    return (
        <li className='dropdown-page'>
            <img src={props.img}></img>
            <a> {props.text}</a>
        </li>
    )
}