import "./SearchBar.css"
import search from "./images/search.png"


function SearchBar() {
    return (
        <div className="search">
            <input type="text" className="search_input" placeholder="Поиск по каталогу..."/>
            <img className="search_btn" src={search} alt="search"/>
        </div>
        )
};

export default SearchBar;