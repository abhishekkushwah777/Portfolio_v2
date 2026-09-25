import "./componentStyles/Buttons.css"

function Button({name, text, icon, onClick}){
    switch(name){
        case "primary":
            return(
                <button className="primary-btn" onClick={onClick}>
                    {text}
                </button>
            )
        case "secondary":
            return(
                <button className="secondary-btn" onClick={onClick}>
                    {text}
                </button>
            )
        case "icon":
            return(
                <button className="icon-btn" onClick={onClick}>
                    {icon}
                </button>
            )
        default:
            return(
                <button className="primary-btn" onClick={onClick}>
                    {text}
                </button>
            )
    }
}
export default Button;