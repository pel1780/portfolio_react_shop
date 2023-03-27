import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import './style/shop.scss';

const App = () => {
    const [shopData, setShopData] = useState([]);
    const getShopData = async () => {
        const result = await axios.get('https://desipossa.github.io/shop_cra/assets/data.json');
        setShopData(result.data);
    }
    useEffect(() => {
        getShopData();
    }, [])
    return (
        <Routes>
            <Route path='/' element={<Layout />}>

            </Route>
        </Routes>
    )
}

export default App;