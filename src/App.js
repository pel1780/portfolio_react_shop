import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./pages/Main";
import MainListSlide from "./pages/MainListSlide";
import Cart from "./shop/Cart";
import CateList from "./shop/CateList";
import Itm from "./shop/Itm";
import SearchResult from "./shop/SearchResult";

import './style/shop.scss';

const App = () => {
    const [shopData, setShopData] = useState([]);
    const [cart, setCart] = useState([]);
    const getShopData = async () => {
        const result = await axios.get('https://desipossa.github.io/shop_cra/assets/data.json');
        const r = await result.data;
        const rd = r.map(it => {
            return {
                price: it.price != '0.0' ? it.price : '10.0',
                id: it.id,
                name: it.name,
                api_featured_image: it.api_featured_image,
                description: it.description,
                product_type: it.product_type,
                product_colors: it.product_colors,
                category: it.category
            }
        })
        setShopData(rd);
    }
    useEffect(() => {
        getShopData();
    }, []);

    console.log(shopData)

    const [sw, setW] = useState([]);
    const getKr = async () => {
        const w = await axios.get('https://api.manana.kr/exchange/rate.json')
        setW(w.data[1].rate);
    }

    useEffect(() => {
        getKr()
    }, []);

    console.log(shopData)

    const dataType = shopData.map(it => it.product_type);
    const ItmType = dataType.filter(Boolean);
    const typeItm = [...new Set(ItmType)];

    const eyeType = typeItm.filter(it => it.includes('eye') || it.includes('mascara'));
    const lipType = typeItm.filter(it => it.includes('lip'));
    const faceType = typeItm.filter(it => it.includes('foundation') || it.includes('blush') || it.includes('bronzer'));

    const subMenu = [
        { tit: 'FACE', sub: faceType },
        { tit: 'EYE', sub: eyeType },
        { tit: 'LIP', sub: lipType },
    ];




    return (
        <Routes>
            <Route path='/' element={<Layout shopData={shopData} subMenu={subMenu} />}>
                <Route path="/" element={<Main shopData={shopData} sw={sw} />}>
                    <Route index element={<MainListSlide cate={'cream'} shopData={shopData} sw={sw} />}></Route>
                    <Route path="tab/cream" element={<MainListSlide cate={'cream'} shopData={shopData} sw={sw} />}></Route>
                    <Route path="tab/palette" element={<MainListSlide cate={'palette'} shopData={shopData} sw={sw} />}></Route>
                    <Route path="tab/concealer" element={<MainListSlide cate={'concealer'} shopData={shopData} sw={sw} />}></Route>
                </Route>
                <Route path="search" element={<SearchResult shopData={shopData} />} />
                <Route path="detail/:itm" element={<Itm shopData={shopData} cart={cart} setCart={setCart} />} />
                <Route path="cart" element={<Cart shopData={shopData} cart={cart} setCart={setCart} sw={sw} />} />
                <Route path=":cate" element={<CateList shopData={shopData} sw={sw} subMenu={subMenu} />} />
            </Route>
        </Routes>
    )
}

export default App;