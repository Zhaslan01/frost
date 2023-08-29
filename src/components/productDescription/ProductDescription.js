import "./ProductDescription.css"
import ProductPhoto from "../productPhoto/ProductPhoto";
import tick from "./images/tick.svg"
import cross from "./images/cross.svg"
import Comments from "../comments/Comments";
import AutoBrands from "../ui/auto_brands/AutoBrands";
import Available from "../ui/available/Available";
import Footer from "../footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";


// http://frost.runtime.kz/products/7

// http://frost.runtime.kz/products?brandId=2

// http://frost.runtime.kz/products/3

//http://frost.runtime.kz/reviews?productId=7

// const productId = 2;

function ProductDescription(props) {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [brands, setBrands] = useState([]);


    useEffect(() => {
        axios.get(`http://frost.runtime.kz/products/${productId}`).then(function (response) {
            let data = response.data;
            console.log('abc')
            console.log(data.available);
            setProduct(data);
        });
        axios
            .get(`http://frost.runtime.kz/products/${productId}`, {
                params: {
                    productId: productId,
                },
            })
            .then(function (response) {
                let data = response.data;
                setReviews(data);
            });
        axios
            .get(`http://frost.runtime.kz/products/${productId}`).then(function (response) {
            let data = response.data;
            console.log('something')
            setBrands(data);
        })
    }, [productId]);
    return (
        <div className="product">
            <div className="product_container">
                <div className="left_side">
                    <ProductPhoto/>
                    <p>Применим к автомобилям:</p>
                    <AutoBrands data={brands}/>
                </div>

                <div className="right_side">
                    <div className="about">
                        <h2>{product.name}
                        </h2>
                        <div className="articool">
                            <p>Артикул:
                                <span>{product.code}</span>
                            </p>
                            <p>Производитель:
                                <span> {product.manufacturer}</span>
                            </p>
                            <p>Описание:
                                <span> {product.description}
                        </span>
                            </p>
                        </div>
                    </div>

                    <div className="product_price">
                        <h2>{product.price} тг</h2>
                        <div>
                            <div className="tick">
                                <Available available={product.available} />
                            </div>
                            <p2>г. Астана</p2>
                            <p2>г. Алматы</p2>
                        </div>
                    </div>

                    <div className="responses">
                        <h2>Отзывы</h2>

                        <div className="leave_response">
                            <div>Чтобы оставить отзыв</div>
                            <a href="#"> войдите на сайт</a>
                        </div>
                        {/*<Comments data={reviews}/>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription;