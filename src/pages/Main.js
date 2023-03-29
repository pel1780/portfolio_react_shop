import { Link, NavLink, Outlet } from "react-router-dom";
import MainVisual from "./MainVisual";

const Main = ({ shopData }) => {
    const TabData = ['cream', 'palette', 'concealer']
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
                                    <NavLink to={`/tab/${it}`} activeClassName="active">
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
        </main>
    )
}

export default Main;