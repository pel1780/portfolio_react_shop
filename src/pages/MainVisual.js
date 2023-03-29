import { MainSlideData } from "../data/Info";
import Slide from 'react-slick';
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";

import { BsChevronLeft, BsChevronRight, BsPause, BsPlay } from "react-icons/bs";
import { useRef, useState } from "react";

const MainVisual = () => {
    const slide = useRef(null);
    const [on, setOn] = useState(false);

    const onChange = () => {
        setOn(!on);
    }

    const visualSlideOption = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
    }
    return (
        <section className="MainVisual">
            <Slide className="visualSlide" {...visualSlideOption} ref={slide}>
                {
                    MainSlideData.map((it, idx) => {
                        return (
                            <div key={idx} className={`slide slide0${idx + 1}`}>
                                <div className="txt_case">
                                    <h2>{it.name}</h2>
                                    <p>{it.desc}</p>
                                    <span>{it.subDesc}</span>
                                    <Link to={it.link}>Shop Now</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </Slide>
            <div className="controller">
                <button className="prev" onClick={() => slide.current.slickPrev()}>
                    <BsChevronLeft />
                </button>
                <button className="pause" onClick={onChange}>
                    <BsPause className={`${on ? 'on' : ''}`} onClick={() => slide.current.slickPause()} />
                    <BsPlay className={`${!on ? 'on' : ''}`} onClick={() => slide.current.slickPlay()} />
                </button>
                <button className="next" onClick={() => slide.current.slickNext()}>
                    <BsChevronRight />
                </button>
            </div>
        </section >
    )
}

export default MainVisual;