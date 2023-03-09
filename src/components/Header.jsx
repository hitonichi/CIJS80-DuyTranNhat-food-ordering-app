import "../styles/Header.css"

const Header = (props) => {
    return (
        <div className="header">
            {props.children}
        </div>
    )
}

export default Header