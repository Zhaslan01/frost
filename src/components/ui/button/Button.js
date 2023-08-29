import "/Button.css"


function Button(props) {
    let buttonStyle = props.buttonStyle;
    if (buttonStyle === undefined){
        buttonStyle = buttonStyle.primary;
    }
    return (
        <button {...props} className={buttonStyle}>
            {props.text}
        </button>
    );
}




export default Button;