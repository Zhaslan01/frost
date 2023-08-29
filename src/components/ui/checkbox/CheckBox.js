import "./CheckBox.css"
import {useState} from "react";

function CheckBox(props) {
    const [tick, setTicked] = useState(false)

    function Tick() {
        const clicked = !tick;
        setTicked(clicked);
        props.setInStock(clicked);
    }

    return (
        <div className="category_item checkbox-type" >
            <input type="checkbox" onClick={Tick}/>
            <p>в наличии</p>
        </div>
        )
}


export default CheckBox;