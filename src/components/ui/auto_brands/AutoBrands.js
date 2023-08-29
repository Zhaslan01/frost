import React, {useEffect, useState} from "react";
import './AutoBrands.css';
import axios from "axios";

function AutoBrands() {
    const [brands, setBrands] = useState([]);
    const [openIndex, setOpenIndex] = useState(-1);
    useEffect(() => {
        axios.get('http://frost.runtime.kz/products')
            .then(function (response) {
                let data = response.data;
                setBrands(data);
                console.log('datadata')
            })
    }, []);


    function toggleDropdown(index) {
        if (index === openIndex) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
        }
    }

    return (
        <div className="settings">
            <div className="category">
                {brands.map(function (brand, brandIndex) {
                    return (
                        <div key={brandIndex}>
                            <div onClick={() => toggleDropdown(brandIndex)}>
                                <span>{openIndex === brandIndex ? '-' : '+'}</span>
                                {brand.auto}
                            </div>
                            {openIndex === brandIndex &&
                                brand.models.map(function (model, modelIndex) {
                                    return (
                                        <div className="drop_list" key={modelIndex}>
                                            <span>+</span>
                                            {model.auto}
                                        </div>
                                    )
                                })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AutoBrands;

