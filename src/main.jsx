/*
 * Copyright (c)  2025. All rights reserved.
 *
 * Author : Yashi EL
 * github : github.com/yashiel
 *
 * This source code is licensed under the MIT, Apache 2.0 license
 * found in the LICENSE file in the root directory of this source tree
 */

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router'
import App from './App.jsx'
import Artists from './pages/Artists'
import Events from './pages/Events'
import Products from './pages/Products'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/artists' element={<Artists/>}/>
                <Route path='/events' element={<Events/>}/>
                <Route path='/products' element={<Products/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)