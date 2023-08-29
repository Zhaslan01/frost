import "./Registration.css"


function Registration() {
    return (
        <div className="registration_container">
            <div className="registration_window">
                <div className="registration_txt">Создание учётной записи</div>
                <div className="registration_data">
                    <input type="text" placeholder="Имя" className="registration_name"/>
                    <input type="text" placeholder="Фамилия" className="registration_surname"/>
                    <input type="text" placeholder="Адрес Электронной Почты" className="registration_mail"/>
                    <input type="text" placeholder="Пароль" className="registration_password"/>
                    <input type="text" placeholder="Повторите Пароль" className="registration_password_repeat"/>
                </div>
                <div className="register">
                    <a href="#" className="register_btn">Зарегистрироваться</a>
                    <a href="#" className="login_profile">Войти в существующую учётную запись</a>
                </div>
            </div>
        </div>
    )
}


export default Registration;