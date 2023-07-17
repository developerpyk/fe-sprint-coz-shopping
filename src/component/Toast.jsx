import bookmarkoff from "../img/bookmarkoff.png";
import bookmarkon from "../img/bookmarkon.png";

export default function Toast(props) {
    const {img, text, onClick} = props;
    
    return (
        <div className="toast-wrapper" onClick={onClick}>
            <img src={img}/>
            <p>{text}</p>
        </div>
    )

}