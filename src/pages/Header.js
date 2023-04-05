import { Link } from "react-router-dom";
import Nav from "./Nav";
import Search from "./Search";

import { BsCart4 } from "react-icons/bs";

const Header = ({ shopData, menu, cart }) => {

    return (
        <header className="Header">
            <div className="inner">
                <Nav shopData={shopData} menu={menu} />
                <h1>
                    <Link to={`/`}>
                        <img src={`${process.env.PUBLIC_URL}/image/logo.svg`} alt="" />
                    </Link>
                </h1>
                <ul className="right_menu">
                    <li className="cart">
                        <Link to='/cart'><BsCart4 /><span>{cart.length}</span></Link>
                    </li>
                    <Search shopData={shopData} />
                </ul>
            </div>
        </header>
    )
}

export default Header;