import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const CateList = ({ shopData, sw, menu }) => {
    const { type } = useParams();
    const typeTit = menu.find(it => it.type === type);

    const subtit = typeTit.sub;
    const list = shopData.filter(it =>
        it.product_type == subtit[0]
        || it.product_type == subtit[1]
        || it.product_type == subtit[2]
        || it.product_type == subtit[3]
    );

    const [sort, setSort] = useState([...list]);

    const priceUp = () => {
        setSort(list.sort((a, b) => b.price - a.price));
    }
    const priceDown = () => {
        setSort(list.sort((a, b) => a.price - b.price));
    }
    const sin = () => {
        setSort(list.sort((a, b) => b.id - a.id));
    }
    const hot = () => {
        setSort(list.sort((a, b) => b.description?.length - a.description?.length));
    }
    useEffect(() => {
        setSort(list)
    }, [type, shopData])

    const [page, setPage] = useState(24);
    const { pathname } = useLocation();
    useEffect(() => {
        return () => {
            setPage(24);

        }
    }, [pathname])


    return (
        <div className="inner CateList">
            <div className="CateTit">
                <h2>{type}</h2>
                <div className="service">
                    <ul className="sub">
                        {typeTit.sub.map((it, idx) => <li key={idx}><Link to={`/${type}/${it}`}>{it}</Link></li>)}
                    </ul>
                    <ul className="sort">
                        <li onClick={priceUp}>높은가격</li>
                        <li onClick={priceDown}>낮은가격</li>
                        <li onClick={sin}>신상품</li>
                        <li onClick={hot}>인기상품</li>
                    </ul>
                </div>

            </div>
            <ul className="list">

                {list &&
                    sort.map(it => {
                        return (
                            <li key={it.id} className="itm">
                                <Link to={`/detail/${it.id}`}>
                                    <figure className="imgCase">
                                        <img src={it.api_featured_image}
                                            onError={e => e.target.src = `${process.env.PUBLIC_URL}/image/missing_img.jpg`} alt="" />
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
                                    <div className="itmPrice">{parseInt(it.price * sw).toLocaleString()}원</div>
                                </Link>
                            </li>
                        )
                    }).slice(0, page)
                }
            </ul>
            {
                sort.length < page
                    ? ''
                    : <button onClick={() => setPage(page + 24)} className='more'>more</button>
            }
        </div>
    )
}

export default CateList;