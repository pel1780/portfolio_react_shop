import React from 'react'
import { Link } from 'react-router-dom';
import { BsChevronRight } from "react-icons/bs";

const MainAbout = () => {
    return (
        <section className='MainAbout'>
            <figure>
                <img src={`${process.env.PUBLIC_URL}/image/round_logo.svg`} alt="" />
            </figure>
            <p>authentic beauty</p>
            <Link><span>More</span><BsChevronRight /></Link>
        </section>
    )
}

export default MainAbout;