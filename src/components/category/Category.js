import "./Category.css"
import Dropdown from "../ui/dropdown/Dropdown";
import {useEffect, useState} from "react";
import axios from "axios";
import ProductItem from "../productItem/ProductItem";
import CheckBox from "../ui/checkbox/CheckBox";


function Category(props) {
    const [category, setCategory] = useState([]);
    const [brand, setBrand] = useState([]);
    const [model, setModel] = useState([]);
    const [generation, setGeneration] = useState([])

    const [selectedBrand, setSelectedBrand] = useState(undefined);
    const [selectedModel, setSelectedModel] = useState(undefined);
    const [selectedGeneration, setSelectedGeneration] = useState(undefined);
    useEffect(function () {
        axios
            .get('http://frost.runtime.kz/categories')
            .then(function (response) {
                let data = response.data;
                setCategory(data);
            });
        axios
            .get('http://frost.runtime.kz/brands')
            .then(function (response) {
                let data = response.data;
                setBrand(data);
            })
    }, []);

    useEffect(() => {
        if (selectedBrand && selectedBrand !== "Все Марки") {
            axios.get(`http://frost.runtime.kz/models?brandId=${selectedBrand}`)
                .then(function (response) {
                    let data = response.data;
                    setModel(data);
                });
        } else {
            setModel([]);
            setGeneration([]);
        }
        setSelectedModel(undefined);
        setSelectedGeneration(undefined);
        props.setBrandId(selectedBrand);
        props.setModelId(undefined);
        props.setGenerationId(undefined);
    }, [selectedBrand]);

    useEffect(() => {
        if (selectedModel && selectedModel !== 'Все Модели') {
            axios
                .get(`http://frost.runtime.kz/generations?modelId=${selectedModel}`)
                .then(function (response) {
                    let data = response.data;
                    setGeneration(data);
                    if (data.length < 0) {
                        props.setGenerationId(data[0].id);
                    } else {
                        props.setGenerationId(null);
                    }
                })
        } else {
            setGeneration([]);
            setSelectedGeneration(undefined);
            props.setGenerationId(null);
            // props.setModelId(selectedModel);
            // props.setBrandId(null);
            // props.setModelId(null);
        }
    }, [selectedModel]);


    return (
        <div className="category">
            <div className="category_container">
                <div className="category_item">
                    <p>Категория</p>
                    <Dropdown categories={category}
                              data={category}
                              defaultText="Все Категории"
                              onChanger={function (categoryId) {
                                  // console.log(categoryId);
                              }}/>
                </div>

                <div className="category_item">
                    <p>Марка</p>
                    <Dropdown categories={brand}
                              data={brand}
                              defaultText="Все Марки"
                              onChanger={function (brandId) {
                                  // console.log(brandId);
                                  setSelectedBrand(brandId);
                                  props.setBrandId(brandId);
                              }}/>
                </div>
                <div className="category_item checkbox-type">
                    <CheckBox setInStock={props.setInStock}/>
                </div>

                <div className="category_item">
                    <p>Модель</p>
                    <Dropdown categories={model}
                              data={model}
                              defaultText="Все Модели"
                              onChanger={function (modelId) {
                                  // console.log(modelId);
                                  setSelectedModel(modelId);
                                  props.setModelId(modelId);
                              }}
                    />
                </div>

                <div className="category_item">
                    <p>Поколения</p>
                    <Dropdown categories={generation}
                              data={generation}
                              defaultText="Все Поколения"
                              onChanger={function (generationId) {
                                  // console.log(generationId);
                                  props.setGenerationId(generationId);
                              }}/>
                </div>
            </div>
        </div>
    )
}

export default Category;