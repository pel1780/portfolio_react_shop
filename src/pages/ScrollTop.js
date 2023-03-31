import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
    const { pathname } = useLocation();

    const scrTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        if (!pathname.includes('/tab')) {
            scrTop();
        }
    }, [pathname]);

    return null;
}

export default ScrollTop;