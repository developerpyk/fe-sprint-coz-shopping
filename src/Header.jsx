import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './header.css';
import logo from "../src/img/logo.png";
import hamburger from "../src/img/hamburger.png";
import products from "../src/img/products.png";
import bookmark from "../src/img/bookmark.png";
import DropdownItem from './component/Dropdown';

export default function Header() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false); 

    return (
        // header-container가 flex conatainer임.
        <header className="header-container">
            <div className="logo-container">
                <div className="logo-img" onClick={() => { navigate('/') }}>
                    <img src={logo} alt="logo" />
                </div>
                <h1 className="logo-title" onClick={() => { navigate('/') }}>COZ Shopping</h1>
            </div>
            <div className="hamburger-button" onClick={() => { setOpen((prev) => !prev) }}>
                <img src={hamburger} alt="hamburger button"/>
            </div>
            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                <ul>
                    <p>{"박윤경님, 안녕하세요!"}</p>
                    <DropdownItem img={products} text={"상품리스트 페이지"} onClick={() => { navigate('/products/list') }} />
                    <DropdownItem img={bookmark} text={"북마크 페이지"} onClick={() => { navigate('/bookmark') }} />
                </ul>
            </div>
        </header>
    );
}

