import "./Tabs.css"
import {useState} from "react";

function Tabs() {
    const [state, setState] = useState([
        {page: 1, content: 'first'},
        {page: 2, content: 'second'},
        {page: 3, content: 'third'},
    ]);
    const [state2, setState2] = useState(undefined);

    function clickItem(index) {
        let change = 0;
        setState2(function () {
            return index;
        });
    }

    let render;
    if (state2 === undefined) {
        render = <b>Вкладка не выбрана</b>
    } else {
        render = <div>{state[state2].content}</div>
    }

    return (
        <div className="tabs">
            <div className="item">
                {state.map(function (item, index) {
                    return (
                        <a key={index} className="button" onClick={function () {
                            clickItem(index);
                        })>
                        {item.page}
                            </a>
                            );
                        })
                }
                    </div>
                {render}
                    </div>
                    )
                })


export default Tabs;
