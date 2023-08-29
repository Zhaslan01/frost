import "./Header.css"
import logo from "./images/logo.png"
import cart from "./images/cart.svg"
// import Select from "../ui/select/Select";
import SearchBar from "../ui/search/SearchBar";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header_container">
                <Link to={'/main'}>
                    <img src={logo} alt="logo" className="logo"/>
                </Link>
                <div className="contacts">
                    <div className="contacts_info">
                        <div className="city">г. Нур-Султан</div>
                        <div className="phone">+7 777 777 77 77</div>
                    </div>
                    <div className="contacts_info">
                        <div className="city">г. Алмата</div>
                        <div className="phone">+7 777 777 77 77</div>
                    </div>
                </div>
                <SearchBar/>
                <div className="authentication">
                    <a href="#">Вход в личный кабинет</a>
                    <Link to="/registration">Зарегистрироваться</Link>
                </div>
                <div className="cart">
                    <Link to={'/cart'}>
                        <img className="cart_icon" src={cart} alt="cart"/>
                    </Link>
                    <div className="cart_bg">
                        <div className="cart_number">2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;