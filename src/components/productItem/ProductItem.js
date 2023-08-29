import "./ProductItem.css";
import { Link } from "react-router-dom";

function ProductItem(props) {
    // props -> {
    //   productId: ...,
    //   name: ...,
    //   price: ...,
    // }
    return (
        <div className="product_card">
            <img src={props.image} alt="compressor" className="compressor_img" />
            <p className="compressor_info">
                <Link to={`/item/${props.productId}`} className="compressor_text">
                    {props.name}
                </Link>
            </p>
            <div className="compressor_purchase">
                <div className="compressor_price">{props.price} тг</div>
                <button className="compressor_buy">Купить</button>
            </div>
        </div>
    );
}

export default ProductItem;