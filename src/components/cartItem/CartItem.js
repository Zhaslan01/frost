import "./CartItem.css"
import {useState} from "react";


function CartItem(props) {
    const [quantity, setQuantity] = useState(1);

    function ClickPlus(){
        setQuantity(quantity+1);
    };

    function ClickMinus(){
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const totalPrice = props.data.price * quantity;

    return (
        <div>
            <div className="cart_item">
                <div className="product_name">{props.data.name}</div>
                <div className="product_options">
                    <div className="count">
                        <span onClick={ClickMinus}>–</span>
                        <span>{quantity}</span>
                        <span onClick={ClickPlus}>+</span>
                    </div>
                    <div>{/*props.data.price*/} {totalPrice}</div>
                </div>
            </div>
            <div className="product_info">
                <span>Артикул: {props.data.articool}</span>

            </div>
        </div>
    )
}

export default CartItem;