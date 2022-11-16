import { Link } from "react-router-dom";
import Logo from "../assets/metabnb-logo.svg"

export default function Navbar() {
    return (
        <header>
            <div className="container row">
                <a href="#" className="logo">
                    <img src={Logo} alt="metabnb nft place" />
                </a>
                <nav className="navbar">
                    <ul className="nav__list nav__list--primary">
                        <li><Link to="/" className="nav__item">Home</Link></li>

                        <li><Link to="/placestostay" className="nav__item">Place to Stay</Link></li>
                        <li>

                            <a href="#" className="nav__item">Places</a>
                        </li>
                        <li><a href="#" className="nav__item">Community</a></li>
                    </ul>
                    <ul className="nav__list">
                        <li><a href="#" className="nav__item btn-cta">Connect Wallet</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

/*

<nav className="navbar container row">
            <img src={Logo} alt="" />
            <ul className="row">
                <li><a href="#">Home</a></li>
                <li><a href="#">Place to Stay</a></li>
                <li>
                    <Link to="/places">Places</Link>
                </li>
                <li><a href="#">Community</a></li>
                <li><a href="#" className="btn-cta">Connect Wallet</a></li>
            </ul>
        </nav>
*/