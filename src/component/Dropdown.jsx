export default function DropdownItem(props) {
    const {
        img,
        text,
        onClick
    } = props
    
    return (
        <li className='dropdown-page' onClick={onClick}>
            <img src={img}/>
            <a> {text}</a>
        </li>
    )
}