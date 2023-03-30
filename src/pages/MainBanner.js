import React from 'react';
import { Link } from 'react-router-dom';
import { MainBannerData } from '../data/Info';

const MainBanner = () => {
    return (
        <section className='MainBanner'>
            <div className="inner">
                <h2>{MainBannerData.tit}</h2>
                <p>{MainBannerData.desc}</p>
                <Link to={MainBannerData.link}>More</Link>
            </div>
        </section>
    )
}

export default MainBanner;