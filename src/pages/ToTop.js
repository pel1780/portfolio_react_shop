import { BsFillArrowUpCircleFill } from "react-icons/bs";
import styled from "styled-components";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";

const ToTopWrapper = styled.div`
position: fixed;
bottom: 100px;
right: 100px;
font-size: 40px;
color: #007ba6;
opacity: 0;
visibility: hidden;
transition: .5s;

&.on {
    opacity: 1;
    visibility: visible;
}
@media (max-width: 768px){
    bottom: 50px;
    right: 50px;
}

`
const ToTop = () => {

    const [scr, setScr] = useState(0);

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    }, []);

    const scrollHandler = () => {
        let sct = window.scrollY;
        setScr(sct);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    const ToTopHandler = () => {
        gsap.to(window, { duration: 0.5, scrollTo: 0 });
    }
    return (
        <ToTopWrapper onClick={ToTopHandler} className={scr > 400 ? 'on' : ''}>
            <BsFillArrowUpCircleFill />
        </ToTopWrapper>
    )
}
export default ToTop;