import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const SubList = ({ shopData, sw }) => {
    const { sub } = useParams();
    const subList = shopData.filter(it => it.product_type === sub);
    const [sort, setSort] = useState([...subList]);

    const priceUp = () => {
        setSort(subList.sort((a, b) => b.price - a.price));
    }
    const priceDown = () => {
        setSort(subList.sort((a, b) => a.price - b.price));
    }
    const sin = () => {
        setSort(subList.sort((a, b) => b.id - a.id));
    }
    const hot = () => {
        setSort(subList.sort((a, b) => b.description?.length - a.description?.length));
    }
    useEffect(() => {
        setSort(subList)
    }, [sub, shopData])
    // console.log(sort)

    return (
        <div className="inner CateList">
            <div className="CateTit">
                <h2>{sub}</h2>
                <div className="service">
                    <ul className="sort">
                        <li onClick={priceUp}>높은가격</li>
                        <li onClick={priceDown}>낮은가격</li>
                        <li onClick={sin}>신상품</li>
                        <li onClick={hot}>인기상품</li>
                    </ul>
                </div>

            </div>
            <ul className="list">

                {sort &&
                    sort.map(it => {
                        return (
                            <li key={it.id} className="itm">
                                <Link to={`/detail/${it.id}`}>
                                    <figure className="imgCase">
                                        <img src={it.api_featured_image}
                                            alt=""
                                            onError={e => e.target.src = `${process.env.PUBLIC_URL}/image/missing_img.jpg`}
                                        />
                                    </figure>
                                    <div className="itmTit">{it.name}</div>
                                    <ul className="color">
                                        {it.product_colors &&
                                            it.product_colors.map((color, idx) => {
                                                return <li key={idx} style={{
                                                    background: color.hex_value,
                                                    display: "inline-block",
                                                    width: 10,
                                                    height: 10
                                                }}></li>
                                            }).slice(0, 19)
                                        }
                                    </ul>
                                    <div className="itmPrice">{parseInt(it.price * sw).toString()
                                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SubList