import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./pages/Main";
import SearchResult from "./shop/SearchResult";

import './style/shop.scss';

const App = () => {
    const [shopData, setShopData] = useState([]);
    const getShopData = async () => {
        const result = await axios.get('https://desipossa.github.io/shop_cra/assets/data.json');
        setShopData(result.data);
    }
    useEffect(() => {
        getShopData();
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
                <Route index element={<Main shopData={shopData} />} />
                <Route path="search" element={<SearchResult shopData={shopData} />} />
            </Route>
        </Routes>
    )
}

export default App;