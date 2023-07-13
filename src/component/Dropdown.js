import React from 'react';

export default function DropdownItem(props) {
    return (
        <li className='dropdown-page'>
            <img src={props.img}></img>
            <a> {props.text}</a>
        </li>
    )
}