import { Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";
import { useRef, useState } from "react";

const Nav = ({ menu }) => {
    const [click, setClick] = useState(false);
    return (
        <nav className="gnb">
            <ul className={click ? 'on' : ''} >
                <li onClick={() => setClick(!click)}>
                    <Link to={`#!`}>Shop</Link>
                    <ul className="sub_menu">
                        {
                            menu.map((it, idx) => {
                                return (
                                    <li key={idx}><Link to={it.type}>{it.type}</Link>
                                        <ul>
                                            {it.sub.map((sub, idx) => <li key={idx} onClick={() => setClick(!click)}>
                                                <Link to={`/${it.type}/${sub}`}>{sub}</Link>
                                            </li>
                                            )}
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li onClick={() => setClick(!click)}><Link to={`/about`}>About</Link></li>
            </ul>
            <button className="bar" onClick={() => setClick(!click)}>{click ? <BsXLg /> : <BsList />}</button>
        </nav>
    )
}

export default Nav;