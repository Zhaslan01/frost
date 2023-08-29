import "./Footer.css"
import compressor from "../productList/images/compressor.png";
import insta from "./images/insta.svg"
import mail from "./images/mail.png"
import phone from "./images/phone.svg"

function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="info">
                    <img src={insta} alt="insta" className="insta_img"/>
                    <p>frost auto</p>
                </div>
                <div className="info">
                    <img src={mail} alt="mail" className="mail_img"/>
                    <p>frostauto@gmail.com</p>
                </div>
                <div className="info">
                    <img src={phone} alt="phone" className="phone_img"/>
                    <div className="contacts">
                        <p1>г. Нур-Султан</p1>
                        <p2>+7 777 777 77 77</p2>
                    </div>
                </div>
                <div className="info">
                    <img src={phone} alt="phone" className="phone_img"/>
                    <div className="contacts">
                        <p1>г. Алматы</p1>
                        <p2>+7 777 777 77 77</p2>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer