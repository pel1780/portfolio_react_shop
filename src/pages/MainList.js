import React from 'react'
import { Link } from 'react-router-dom';
import { BsChevronRight } from "react-icons/bs";

const MainList = ({ shopData, sw, cate }) => {
    const list = shopData.filter(it => it.category === cate || it.product_type === cate);
    const newList = cate === 'eyeshadow' ? list.slice(30, 35).map(it => it) : list.slice(0, 6).map(it => it)

    return (
        <section className='MainList'>
            <div className="inner">
                <div className="CateTit">
                    <h2>{cate}</h2>
                    <Link to={`/FACE`}><span>More</span><BsChevronRight /></Link>
                </div>
                <ul className="list">
                    {
                        newList.map(it => {
                            return (
                                <li key={it.id} className="itm">
                                    <Link to={`/detail/${it.id}`}>
                                        <figure className="imgCase">
                                            <img src={it.api_featured_image} alt=""
                                                onError={e => e.target.src = `${process.env.PUBLIC_URL}/image/missing_img.jpg`} />
                                        </figure>
                                        <div className="itmTit">{it.name}</div>
                                        <div className="itmPrice">{parseInt(it.price * sw).toLocaleString()}원</div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default MainList;