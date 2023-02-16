import React, { useState } from 'react';
import './app.scss';
import { TiArrowSortedDown } from 'react-icons/ti';

import one from '../assets/mom/如何成為團媽頁面-01.jpg';


import { Link, animateScroll } from 'react-scroll';

import { LazyLoadImage } from 'react-lazy-load-image-component';

function Search() {
    return (
        <div className="qaContainer">
            <div className="qaContain">
                <div className="imageContainerQa ">
                    <LazyLoadImage src={one} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Search;
