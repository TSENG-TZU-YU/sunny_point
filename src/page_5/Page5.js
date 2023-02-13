import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import Top from '../top/Top';
import top1 from '../assets/five/點數活動頁5-22.png';
import top2 from '../assets/five/點數活動頁5-23.png';

import './_page5.scss';

function Page5() {
    const [down, setDown] = useState(false);

    return (
        <div className="page5" id='#top'>
            <Top />
            <img src={top1} alt="點數活動頁" />
            <div
                className={`clicked ${down ? '' : 'topTo'}`}
                onClick={() => {
                    setDown(true);
                }}
            ></div>
            <img src={top2} alt="點數活動頁" className={`${down ? 'down' : 'up'}`} />
        </div>
    );
}

export default Page5;
