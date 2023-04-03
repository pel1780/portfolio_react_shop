import { useRef } from "react";
import { Link } from "react-router-dom";
import Slide from 'react-slick';
import "slick-carousel/slick/slick.css";

const MainListSlide = ({ shopData, sw, cate }) => {
    const list = shopData.filter(it => it.category === cate);
    const slide = useRef(null);

    const slideOption = {
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            }]
    }
    return (
        <div className="content">
            <div className="slidelist">
                <Slide {...slideOption} ref={slide}>
                    {
                        list.map(it => {
                            return (
                                <div key={it.id} className="itm">
                                    <Link to={`/detail/${it.id}`}>
                                        <figure className="imgCase">
                                            <img src={it.api_featured_image} alt=""
                                                onError={e => e.target.src = `${process.env.PUBLIC_URL}/image/missing_img.jpg`} />
                                        </figure>
                                        <div className="itmTit">{it.name}</div>
                                        <div className="itmPrice">{parseInt(it.price * sw)}원</div>
                                    </Link>
                                </div>
                            )
                        }).slice(2, 9)
                    }
                </Slide>
            </div>
        </div>
    )
}

export default MainListSlide;