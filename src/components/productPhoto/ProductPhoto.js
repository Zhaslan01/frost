import "./ProductPhoto.css"
import photo_1 from "./images/photo_1.png"
import photo_2 from "./images/photo_2.png"
import photo_3 from "./images/photo_3.png"
import photo_4 from "./images/photo_4.png"
import photo_5 from "./images/photo_5.png"
import {useState} from "react";


function ProductPhoto() {
    const [photo, setPhoto] = useState([
        {photo: photo_2},
        {photo: photo_3},
        {photo: photo_4},
        {photo: photo_5},
    ])
    const [main, setMain] = useState({photo: photo_1})

    function click(index) {
        setMain(function (prevPhoto) {
            let newPhoto = {...prevPhoto};
            newPhoto.photo = photo[index].photo;
            return newPhoto;
        })
    }

    return (
        <div className="product_photo">
            <div className="main_img">
                <img src={main.photo} alt="main photo" className="product_img"/>
            </div>
            <div className="row_photo">
                {photo.map(function (item, index) {
                    return (
                        <div key={index} onClick={function () {
                            click(index);
                        }}>
                            <img src={item.photo} className="photo_bg"/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductPhoto;