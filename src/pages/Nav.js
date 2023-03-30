import { Link } from "react-router-dom";

const Nav = ({ shopData, subMenu }) => {
    return (
        <nav className="gnb">
            <ul>
                <li>
                    <Link to={`#!`}>Shop</Link>
                    <ul className="sub_menu">
                        {
                            subMenu.map((it, idx) => {
                                return (
                                    <li key={idx}><Link to={it.tit}>{it.tit}</Link>
                                        <ul>
                                            {it.sub.map((sub, idx) => <li key={idx}>
                                                <Link to={sub}>{sub}</Link>
                                            </li>
                                            )}
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li><Link to={`/about`}>About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;