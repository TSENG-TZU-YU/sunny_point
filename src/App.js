import './App.scss';
import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
//子頁面
import Header from './Header';
import Exchang from './Exchang';
import Search from './Search';
import Page3 from './page_3/Page3';
import Page4 from './page_4/Page4';
import Page5 from './page_5/Page5';
import Page6 from './page_6/Page6';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="Page3" element={<Page3 />} />;
                <Route path="Page4" element={<Page4 />} />;
                <Route path="Page5" element={<Page5 />} />;
                <Route path="Page6" element={<Page6 />} />;

            </Routes>
        </BrowserRouter>
    );
}

export default App;
