/*
 * File: /Users/yashi/Desktop/classproject/src/App.jsx
 * Project: /Users/yashi/Desktop/classproject
 * Created Date: Friday August 8th 2025
 * Author: Yashi EL
 * -----
 * Last Modified: Friday August 8th 2025 4:50:35 am
 * Modified By: the developer formerly known as Yashi EL at <hi@yashiel.com>
 * -----
 * Copyright (c) 2025 Yashi Digital Agency
 * -----
 * HISTORY:
 */

import { Route, Routes } from 'react-router';

import Artists from './pages/Artists';
import Events from './pages/Events';
import Home from './pages/Home';
import Products from './pages/Products';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/artists" element={<Artists />} />
				<Route path="/events" element={<Events />} />
				<Route path="/products" element={<Products />} />
			</Routes>
		</>
	);
};

export default App;