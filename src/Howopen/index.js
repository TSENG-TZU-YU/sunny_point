import { React, useState } from 'react';
import './_momPage4.scss';

import top1 from '../assets/mom/如何成為團媽頁面-04_01.jpg';
import top2 from '../assets/mom/如何成為團媽頁面-04_02.jpg';

function Howopen() {
    const [down, setDown] = useState(false);

    return (
        <div className="mompage4">
            <div className="momFour">
                <img src={top1} alt="/" />
                <div
                    className="down"
                    onClick={() => {
                        setDown(true);
                    }}
                ></div>
            </div>

            <img src={top2} alt="/" className={`${down ? 'expandDown' : 'expandUp'}`} />
        </div>
    );
}

export default Howopen;
