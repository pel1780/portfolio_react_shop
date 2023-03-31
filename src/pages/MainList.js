import React from 'react'
import { Link } from 'react-router-dom';
import { BsChevronRight } from "react-icons/bs";

const MainList = ({ shopData, sw, cate }) => {
    const list = shopData.filter(it => it.category === cate);

    return (
        <section className='MainList'>
            <div className="inner">
                <div className="CateTit">
                    <h2>{cate}</h2>
                    <Link to={`/FACE`}><span>More</span><BsChevronRight /></Link>
                </div>
                <ul className="list">
                    {
                        list.map(it => {
                            return (
                                <li key={it.id} className="itm">
                                    <Link to={`/detail/${it.id}`}>
                                        <figure className="imgCase">
                                            <img src={it.api_featured_image} alt="" />
                                        </figure>
                                        <div className="itmTit">{it.name}</div>
                                        <div className="itmPrice">{parseInt(it.price * sw)}원</div>
                                    </Link>
                                </li>
                            )
                        }).slice(65, 71)
                    }
                </ul>
            </div>
        </section>
    )
}

export default MainList;