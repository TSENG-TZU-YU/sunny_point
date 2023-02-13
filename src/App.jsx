import './App.scss';
import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
//子頁面
import Header from './Header';
import Exchang from './Exchang';
import Search from './Search';

function App() {


    return <Header />
    return <Exchang />
    return <Search />
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/header" element={<Header />} />
                <Route path="/exchange" element={<Exchang />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
