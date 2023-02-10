import './app.scss';
import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
//子頁面
import Header from './Header';
import Page3 from './page_3/Page3';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Header" element={<Header />} />
                <Route path="/Page3" element={<Page3 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
