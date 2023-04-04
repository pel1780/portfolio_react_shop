
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import MainAbout from "./MainAbout";
import MainBanner from "./MainBanner";
import MainList from "./MainList";
import MainVisual from "./MainVisual";

const Main = ({ shopData, sw }) => {
    const TabData = ['cream', 'palette', 'concealer'];
    const [click, setClick] = useState(false);
    return (
        <main>
            <MainVisual />
            <section className="MainTab">
                <div className="inner">
                    <div className="tabMenuCase">
                        <h2>Our Bestsellers</h2>
                        <ul className="tabMenu">
                            {
                                TabData.map((it, idx) => <li key={idx}>
                                    <NavLink to={`/tab/${it}`}
                                        className={idx === 0 && !click ? 'active' : ''}
                                        activeclassname="active"
                                        onClick={() => setClick(true)}>
                                        #{it}
                                    </NavLink>
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className="tabContent">
                        <Outlet />
                    </div>
                </div>
            </section>
            <MainBanner />
            <MainList cate={'concealer'} shopData={shopData} sw={sw} />
            <MainAbout />
        </main >
    )
}

export default Main;