import { Link } from "react-router-dom";

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
            title: "Coupon",
            icon: "",
            to: "/coupon"
        },
        {
            title: "Contact",
            icon: "",
            to: "/contact"
        },
    ];

    return (
        <nav className="navbar">
            <ul className="nav-list">
                {navbar.map((nav, index) => (
                    <li key={index} className="nav-item">
                        <Link to={nav.to} className="nav-link">
                            {nav.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;