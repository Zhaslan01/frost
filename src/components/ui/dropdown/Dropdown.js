// import "./Dropdown.css"
// import {useState} from "react";
//
// function Dropdown(props) {
//     const state = useState ([
//         {name:'Категория 1'},
//         {name:'Категория 2'},
//         {name:'Категория 3'},
//         {name:'Категория 4'},
//     ]);
//
//     const state2 = useState(
//         {category:'Выберите Категории', value: false}
//     )
//     function click(){
//         state2[1](function (prevState){
//             let newState = {...prevState};
//             newState.value = !newState.value;
//             return newState;
//         })
//     }
//
//     const [dropped, setDropped] = useState(false)
//
//     function Dropped() {
//         setDropped(function () {
//             return !dropped;
//         })
//     }
//
//     const [item, setItem] = useState(props.data)
//
//     console.log('--- props ---');
//     console.log(props);
//
//     // function ChooseItem() {
//     //     if (props.data !== undefined)
//     //      return (setItem)
//     // }
//     return (
//         <div className="dropdown" onClick={Dropped}>
//             <a className="button">
//                 <p className="label">{props.data.name}</p>
//             </a>
//
//             <div className="items" style={{display: dropped === true ? "none" : "flex"}}>
//                 {props.data.map(function (item, index) {
//                     return (
//                         <a className="button" key={index}>{item.name}</a>
//                         // <a key={index} className="dropdown_item"
//                         //      onClick={() => {
//                         //          // props.data(item)
//                         //      }}>
//                         //     <p>{item.name}</p>
//                         // </a>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }
//
// export default Dropdown;

// import "./Dropdown.css"
// import {useState} from "react";
// function Dropdown(){
//     const state = useState ([
//         {name:'Категория 1'},
//         {name:'Категория 2'},
//         {name:'Категория 3'},
//         {name:'Категория 4'},
//     ]);
//
//     const state2 = useState(
//         {category:'Выберите Категории',}
//     )
//
//     const [select, setSelected] = useState(undefined)
//
//     function click(){
//         state2[1](function (prevState){
//             let newState = {...prevState};
//             newState.value = !newState.value;
//             return newState;
//         })
//     }
//
//     function click_select(item) {
//         setSelected(item.name)
//         // state3[0](true)
//         // if (click!==undefined)  click(item.name)
//         // state3[1](item.name)
//     }
//
//     return (
//         <div className="dropdown" onClick={click}>
//             {/*<a className="button">{state2[0].category//}</a>*/}
//             <a className="button">{select ? setSelected.name : 'Выберите Категорию'}</a>
//             <div className="items" style={{visibility:state2[0].value ? 'visible':'hidden'}}>
//                 {state[0].map(function (item, index){
//                     return (
//                         <a className="button" key={index} onClick={function(){click_select(item)}}>{item.name}</a>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }
//
// export default Dropdown;

// import "./Dropdown.css";
// import { useEffect, useState } from "react";
//
// function Dropdown(props) {
//     const { data, defaultText } = props;
//
//     const [categories, setCategories] = useState([]);
//     const [brands, setBrands] = useState([]);
//
//     useEffect(() => {
//         const chooseCategory = props.data.map(item => ({ text: item.name, value: item.id }));
//         setCategories([{ text: defaultText, value: undefined }, ...chooseCategory]);
//     }, [props.data]);
//
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedCategory, setSelectedCategory] = useState(undefined);
//
//     function clickDropdown() {
//         setIsOpen(!isOpen);
//     }
//
//     function selectCategory(category) {
//         setSelectedCategory(category);
//         setIsOpen(false);
//         if (props.onChanger !== undefined) props.onChanger(category.value);
//     }
//
//     const [selectedBrand, setSelectedBrand] = useState(undefined);
//
//     function selectBrand(brand) {
//         setSelectedBrand(brand);
//         setIsOpen(false);
//     }
//
//     return (
//         <div className="dropdown">
//             <a className="button" onClick={clickDropdown}>
//                 {selectedCategory ? selectedCategory.text : defaultText}
//             </a>
//             <div className="items" style={{ visibility: isOpen ? "visible" : "hidden" }}>
//                 {categories.map((item, index) => (
//                     <a
//                         className="button"
//                         key={index}
//                         onClick={() => selectCategory(item)}
//                     >
//                         {item.text}
//                     </a>
//                 ))}
//             </div>
//         </div>
//     );
// }
//
// export default Dropdown;

import "./Dropdown.css";
import { useEffect, useState } from "react";

function Dropdown(props) {
    const { data, defaultText, selectedValue } = props;
    // const [name,setName] = useState(props.name)
    const [categories, setCategories] = useState(props.categories);
    // const [name, setName] = useState(undefined);
    // const [items, setItems] = useState(undefined);
    // useEffect(function () {
    //     setName(props.name)
    //     setItems(props.items)
    //     if (props.click!==undefined)  props.click(0)
    // },[props.items]);

    useEffect(() => {
        const chooseCategory = props.data.map((item) => ({
            text: item.name,
            value: item.id,
        }));
        setCategories([{ text: defaultText, value: undefined }, ...chooseCategory]);
    }, [props.data, defaultText, props.categories]);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(props.categories);

    useEffect(() => {
        if (selectedValue === undefined) {
            setSelectedCategory(undefined);
        } else {
            const category = categories.find(
                (item) => item.value === selectedValue
            );
            setSelectedCategory(category);
        }
    }, [selectedValue, categories]);

    function clickDropdown() {
        setIsOpen(!isOpen);
    }

    function selectCategory(category) {
        setSelectedCategory(category);
        setIsOpen(false);
        if (props.onChanger !== undefined) props.onChanger(category.value);
    }

    return (
        <div className="dropdown">
            <a className="button" onClick={clickDropdown}>
                {selectedCategory ? selectedCategory.text : defaultText}
            </a>
            <div className="items" style={{ visibility: isOpen ? "visible" : "hidden" }}>
                {categories.map((item, index) => (
                    <a
                        className="button"
                        key={index}
                        onClick={() => selectCategory(item)}
                    >
                        {item.text}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Dropdown;