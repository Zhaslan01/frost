import "./Select.css"
import {useState} from "react";

function Select(){
    const [selects,setSelects] = useState();
    return (
        <div>
            <select className="select" value={selects} onChange={setSelects}>
                <option>Category #1</option>
                <option>Category #2</option>
                <option>Category #3</option>
                <option>Category #4</option>
            </select>
        </div>
    )
}



export default Select;