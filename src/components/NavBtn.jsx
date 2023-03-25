import { NavLink } from "react-router-dom";
const NavBtn = () => {
    const navbar = [
        {
            title: "Home",
            icon: "",
            to: "/"
        },
        {
            title: "Menu",
            icon: "",
            to: "/menu"
        },
        {
            title: "Stores",
            icon: "",
            to: "/store"
        },
        {
            title: "Feedback",
            icon: "",
            to: "/feedback"
        },
    ];

    const handleNavClick = () => {
        console.log('nav clicked');
        document.getElementById('#nav-check').checked = false;
    }
    
    return (
        <div className="mobile-nav-btn">
            <input
                type="checkbox"
                id="nav-check"></input>
            <label htmlFor="nav-check">
                <i className="fas fa-bars"></i>
            </label>

            <div className="mobile-navbar">
                {navbar.map((nav, id) => (
                    <NavLink key={id}
                        to={nav.to}
                        className="nav-item"
                        onClick={() => handleNavClick()}
                        >
                            {nav.title}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default NavBtn