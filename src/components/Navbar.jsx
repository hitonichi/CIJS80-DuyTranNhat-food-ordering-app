import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navbar = [
        {
            title: "Home",
            icon: "",
            to: "/"
        },
        {
            title: "About",
            icon: "",
            to: "/about"
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

    return (
        <nav className="navbar">
            <div className="nav-list">
                {navbar.map((nav, id) => (
                    <NavLink key={id}
                        to={nav.to}
                        className="nav-item">
                            {nav.title}
                    </NavLink>
                ))}
            </div>
            {/* <ul className="nav-list">
                {navbar.map((nav, index) => (
                    <li key={index} className="nav-item">
                        <Link to={nav.to} className="nav-link">
                            {nav.title}
                        </Link>
                    </li>
                ))}
            </ul> */}
        </nav>
    );
}

export default Navbar;