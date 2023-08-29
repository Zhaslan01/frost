import "./NavBar.css"
import {useState} from "react";


function NavBar(){
    const [clicked, setClicked] = useState('Корзина');

    function handleClick(click) {
        setClicked(click);
    }

    return (
        <div className="nav_bar">
            <div className="order">Оформление Заказа</div>
            <button
                onClick={() => handleClick('Корзина')}
                className={clicked === 'Корзина' ? 'chosen' : 'not_chosen'}
            >
                Корзина
            </button>
            <button
                onClick={() => handleClick('Контактные данные')}
                className={clicked === 'Контактные данные' ? 'chosen' : 'not_chosen'}
            >
                Контактные данные
            </button>
            <button
                onClick={() => handleClick('Доставка')}
                className={clicked === 'Доставка' ? 'chosen' : 'not_chosen'}
            >
                Доставка
            </button>
            <button
                onClick={() => handleClick('Завершение')}
                className={clicked === 'Завершение' ? 'chosen_last' : 'not_chosen_last'}
            >
                Завершение
            </button>
        </div>
    );
}

export default NavBar;