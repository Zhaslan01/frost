import "./ProductList.css"
import compressor from "./images/compressor.png"
import compressor_2 from "./images/compressor_2.png"
import compressor_3 from "./images/compressor_3.png"
import compressor_4 from "./images/compressor_4.png"
import ProductItem from "../productItem/ProductItem";
import axios from "axios";
import {useEffect, useState} from "react";
import Pages from "../ui/pages/Pages";
import Category from "../category/Category";

function Product_list(props) {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState({});
    const [brandId, setBrandId] = useState(undefined);
    const [modelId, setModelId] = useState(undefined);
    const [generationId, setGenerationId] = useState(undefined);
    const [instock, setInStock] = useState(false);
    console.log('abc');
    useEffect(function (props) {
        console.log('--- filter params ---');
        console.log(brandId);
        console.log(modelId);
        console.log(generationId);
        console.log(instock);
        axios.get('http://frost.runtime.kz/products', {
            params: {
                page: 1,
                size: 3,
                brandId: brandId,
                modelId: modelId,
                generationId: generationId,
                available: instock,
            }
        }).then(function (response) {
            let data = response.data;
            setPage({currentPage: data.currentPage, totalPages: data.totalPages})
            setProducts(data.items)
        });
    }, [brandId, modelId, generationId, instock]);

    const click_Page = page => axios.get('http://frost.runtime.kz/products', {
        params: {
            page: page,
            size: 3,
            brandId: brandId,
            modelId: modelId,
            generationId: generationId,
            available: instock,
        }
    }).then(function (response) {
        let data = response.data;
        setProducts(data.items)
        setPage({currentPage: data.currentPage, totalPages: data.totalPages})
    })

    return (
        <div className='product_list'>
            <Category setBrandId={setBrandId} setModelId={setModelId} setGenerationId={setGenerationId}
                      setInStock={setInStock}/>
            <div className='product_list_container'>
                {products.map(function (product) {
                    return (
                        <ProductItem key={product.id} name={product.name} price={product.price} productId={product.id}/>
                    )
                })}
            </div>
            <Pages totalPages={page.totalPages} currentPage={page.currentPage} click={click_Page}/>
        </div>
    )
}

export default Product_list;

{/*<div className="product_list_container">*/
}
{/*    <ProductItem image={compressor} info="Компрессор кондиционера Hyundai Tucson, Kia Sportage 97701-2E300. 21345F 213D 780-02t" price={110990}/>*/
}
{/*    <ProductItem image={compressor_2} info="Компрессор кондиционера Nisan, Infinity 701-2E300. 21345F 213D 780-02t875" price={100000}/>*/
}
{/*    <ProductItem image={compressor_3} info="Компрессор кондиционера Kia Rio, Hyndai 890-02F" price={99000}/>*/
}
{/*    <ProductItem image={compressor_4} info="Компрессор кондиционера Audi A4 97701-2E300. 21345F 213D 780-02t" price={140000}/>*/
}
{/*    <ProductItem image={compressor} info="Компрессор кондиционера Hyundai Tucson, Kia Sportage 97701-2E300. 21345F 213D 780-02t" price={110990}/>*/
}
{/*    <ProductItem image={compressor_2} info="Компрессор кондиционера Nisan, Infinity 701-2E300. 21345F 213D 780-02t875" price={100000}/>*/
}
{/*    <ProductItem image={compressor_3} info="Компрессор кондиционера Kia Rio, Hyndai 890-02F" price={99000}/>*/
}
{/*    <ProductItem image={compressor_4} info="Компрессор кондиционера Audi A4 97701-2E300. 21345F 213D 780-02t" price={140000}/><ProductItem image={compressor} info="Компрессор кондиционера Hyundai Tucson, Kia Sportage 97701-2E300. 21345F 213D 780-02t" price={110990}/>*/
}
{/*    <ProductItem image={compressor_2} info="Компрессор кондиционера Nisan, Infinity 701-2E300. 21345F 213D 780-02t875" price={100000}/>*/
}
{/*    <ProductItem image={compressor_3} info="Компрессор кондиционера Kia Rio, Hyndai 890-02F" price={99000}/>*/
}
{/*    <ProductItem image={compressor_4} info="Компрессор кондиционера Audi A4 97701-2E300. 21345F 213D 780-02t" price={140000}/>*/
}
{/*</div>*/
}
