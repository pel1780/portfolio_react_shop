import { Outlet } from "react-router-dom";
import Header from "./pages/Header";

const Layout = ({ shopData, subMenu }) => {
    return (
        <div className="Wrap">
            <Header shopData={shopData} subMenu={subMenu} />
            <Outlet />
        </div>
    )
}

export default Layout;