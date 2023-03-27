import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="Wrap">
            <header>
                header
            </header>
            <Outlet />
            <footer>
                footer
            </footer>
        </div>
    )
}

export default Layout;