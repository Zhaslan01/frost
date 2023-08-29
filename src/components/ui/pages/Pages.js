
import {useState} from "react";
//
// const [state, setState] = useState([
//         {page: 1, content: 'first', state: false},
//         {page: 2, content: 'second', state: false},
//         {page: 3, content: 'third', state: false},
//     ]);
//
//     const [state2, setState2] = useState(undefined);
//
//     function clickItem(index) {
//         let change = 0;
//         setState2(function () {
//             return index;
//         });
//         console.log('taped')
//     }

// function clickBack(index) {
//     setState2(function (){
//         let newState = prevState;
//         newState = prevState - 1;
//         return newState;
//     })
// }


// let render;
// if (state2 === undefined) {
//     render = <b>Не выбрано</b>
// } else {
//     render = <div>{state[state2].content}</div>
// }
import "./Pages.css"
import arrow from "./images/arrow.png"

function Pages(props) {


    let page = []
    for(let i = 1;i<=props.totalPages;i++) {
        page.push(i)
    }
    function clickBack(){
        props.click(props.currentPage-1)}
    function clickForward(){
        props.click(props.currentPage+1)}

    return (
        <div className="product_list_container">
            <div className='pages'>
                {props.currentPage!==1 ?
                    <div className='click_back' onClick={clickBack}>Назад</div> : ''}
                {page.map(function(item,index){
                    return (
                        <div key={index}
                             className={props.currentPage === item ? 'active_page' : 'page'} onClick={
                            function() {
                                props.click(item)
                            }
                        }>{item}</div>
                    )
                })}
                {props.currentPage !== props.totalPages ? <div className ='click_forward' onClick={clickForward}>Вперед<img src={arrow} className="arrow" alt="Right"/></div> : ''}
            </div>
        </div>
    )
}


export default Pages;

