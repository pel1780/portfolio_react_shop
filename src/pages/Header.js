import { Link } from "react-router-dom";
import Nav from "./Nav";
import Search from "./Search";

const Header = ({ shopData, subMenu }) => {

    return (
        <header className="Header">
            <div className="inner">
                <Nav shopData={shopData} subMenu={subMenu} />
                <h1>
                    <Link to={`/`}>
                        <img src={`${process.env.PUBLIC_URL}/image/logo.svg`} alt="" />
                    </Link>
                </h1>
                <ul className="right_menu">
                    <li className="cart">
                        <Link to='/'>Cart<span></span></Link>
                    </li>
                    <Search shopData={shopData} />
                    <li className="lang">
                        <Link to='#!'>KR</Link>
                        <ul>
                            <li><Link to='#!'>EN</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;