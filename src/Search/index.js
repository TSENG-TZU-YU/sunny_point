import React, { useState } from 'react';
import './app.scss';

import one from '../assets/eight/點數活動頁5-26.png';

import { Link, animateScroll } from 'react-scroll';

import { LazyLoadImage } from 'react-lazy-load-image-component';

function Search() {
    return (
        <div className="scContainer">
            <div className="scContain">
                <div className="imageContainer1 ">
                    <LazyLoadImage src={one} alt="" />
                    <a className="one" href="https://www.sunnygo.com.tw/web-front/pointExchange" alt="/">
                        {' '}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Search;