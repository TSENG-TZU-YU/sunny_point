import React, { useState } from 'react';
import './app.scss';
import { TiArrowSortedDown } from 'react-icons/ti';

import one from '../assets/mom/如何成為團媽頁面-01.jpg';
import Prev from '../component/Prev_page/index';
import Top from '../component/top/Top';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Search() {
    return (
        <div className="haContainer">
            <Top />
            <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/MomPlan.html">
                <Prev />
            </a>
            <div className="haContain">
                <div className="imageContainerHa ">
                    <LazyLoadImage src={one} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Search;
