import { Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";
import { useState } from "react";

const Nav = ({ menu }) => {
    const [on, setOn] = useState(false);
    return (
        <nav className="gnb">
            <ul className={on ? 'on' : ''}>
                <li>
                    <Link to={`#!`}>Shop</Link>
                    <ul className="sub_menu">
                        {
                            menu.map((it, idx) => {
                                return (
                                    <li key={idx}><Link to={it.type}>{it.type}</Link>
                                        <ul>
                                            {it.sub.map((sub, idx) => <li key={idx}>
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
                <li><Link to={`/about`}>About</Link></li>
            </ul>
            <button className="bar" onClick={() => setOn(!on)}>{on ? <BsXLg /> : <BsList />}</button>
        </nav>
    )
}

export default Nav;