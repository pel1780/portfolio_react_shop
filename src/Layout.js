import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

const Layout = ({ shopData, subMenu }) => {
    return (
        <div className="Wrap">
            <Header shopData={shopData} subMenu={subMenu} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;