import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import ToTop from "./pages/ToTop";

const Layout = ({ shopData, menu, cart }) => {
    return (
        <div className="Wrap">
            <Header shopData={shopData} menu={menu} cart={cart} />
            <Outlet />
            <ToTop />
            <Footer />
        </div>
    )
}

export default Layout;