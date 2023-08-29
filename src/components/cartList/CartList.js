import "./CartList.css"
import CartItem from "../cartItem/CartItem";
import Dropdown from "../ui/dropdown/Dropdown";

function CartList() {
    return (
        <div className="cart_list">
            <div className="cart_container">
                <div className="cart_title">Корзина</div>
                <div className="cart_description">
                    <div>Наименование товара</div>
                    <div className="cart_options">
                        <div>Количество</div>
                        <div>Цена</div>
                    </div>
                </div>
                <CartItem data={{
                    name: 'Компрессор кондиционера Hyundai Tucson, ' +
                        'Kia Sportage 97701-2E300FD; 0935-03se;  ' +
                        'Kia Sportage 97701-2E300FD; 0935-02',
                    price: 110999,
                    articool: 'AC97701',
                }}/>
                <hr/>
                <CartItem data={{
                    name: 'Компрессор кондиционера Hyundai Tucson, Kia Sportage 97701-2E300FD; 0935-03se;',
                    price: 95999,
                    articool: 'AC97701',
                }}/>
                <hr/>
                <div className="payment_info">
                    <div>
                        <p>Способ оплаты</p>
                        {/*<Dropdown_2 label="Оплата при получении"/>*/}
                    </div>
                        <h3>Итого к оплате:</h3>
                        <h3>564 574 тг.</h3>
                </div>
            </div>
        </div>
    )
}

export default CartList;