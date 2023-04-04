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
import SubList from "./shop/SubList";

import './style/shop.scss';
import About from "./pages/About";

const App = () => {
    const [shopData, setShopData] = useState([]);
    const [cart, setCart] = useState([]);
    const getShopData = async () => {
        const result = await axios.get('https://desipossa.github.io/shop_cra/assets/data.json');
        const r = await result.data;
        const rd = r.map(it => {
            return {
                price: it.price == null ? '10.0' : it.price
                    && it.price == '0.0' ? '10.0' : it.price,
                id: it.id,
                name: it.name.slice(0, 25),
                api_featured_image: it.api_featured_image,
                description: it.description,
                product_type: it.product_type,
                product_colors: it.product_colors,
                category: it.category,
                image_link: it.image_link
            }
        })
        setShopData(rd);
    }
    useEffect(() => {
        getShopData();
    }, []);

    const [sw, setW] = useState([]);
    const getKr = async () => {
        const w = await axios.get('https://api.manana.kr/exchange/rate.json')
        setW(w.data[1].rate);
    }

    useEffect(() => {
        getKr()
    }, []);

    const dataType = shopData.map(it => it.product_type);
    const ItmType = dataType.filter(Boolean);
    const typeItm = [...new Set(ItmType)];

    const eyeType = typeItm.filter(it => it.includes('eye') || it.includes('mascara'));
    const lipType = typeItm.filter(it => it.includes('lip'));
    const faceType = typeItm.filter(it => it.includes('foundation') || it.includes('blush') || it.includes('bronzer'));

    const menu = [
        { type: 'FACE', sub: faceType },
        { type: 'EYE', sub: eyeType },
        { type: 'LIP', sub: lipType },
    ];




    return (
        <Routes>
            <Route path='/' element={<Layout shopData={shopData} menu={menu} cart={cart} />}>
                <Route path="search" element={<SearchResult shopData={shopData} />} />
                <Route path="detail/:itm" element={<Itm shopData={shopData} cart={cart} setCart={setCart} />} />
                <Route path="cart" element={<Cart shopData={shopData} cart={cart} setCart={setCart} sw={sw} />} />
                <Route path=":type" element={<CateList shopData={shopData} sw={sw} menu={menu} />} />
                <Route path=":type/:sub" element={<SubList shopData={shopData} sw={sw} menu={menu} />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    )
}

export default App;