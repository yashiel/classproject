/*
 * File: /Users/yashi/Desktop/classproject/src/App.jsx
 * Project: /Users/yashi/Desktop/classproject
 * Created Date: Friday August 8th 2025
 * Author: Yashi EL
 * -----
 * Last Modified: Saturday August 9th 2025 12:40:57 am
 * Modified By: the developer formerly known as Yashi EL at <hi@yashiel.com>
 * -----
 * Copyright (c) 2025 Yashi Digital Agency
 * -----
 * HISTORY:
 */

import { Route, Routes } from 'react-router-dom';
import Artists from './pages/Artists';
import Events from './pages/Events';
import Home from './pages/Home';
import Products from './pages/Products';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Artist from './pages/Artist';
import EditArtist from './pages/EditArtist';
import AddArtist from './pages/AddArtist';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
	return (
		<>
			<Navigation />
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/artists" element={<Artists />} />
				<Route path="/artists/:id" element={<Artist />} />
				<Route path="/artists/:id/edit" element={
					<ProtectedRoute>
						<EditArtist />
					</ProtectedRoute>
				} />
				<Route path="/add-artist" element={
					<ProtectedRoute>
						<AddArtist />
					</ProtectedRoute>
				} />
				<Route path="/events" element={<Events />} />
				<Route path="/products" element={<Products />} />
			</Routes>

			<Footer />
		</>
	);
};

export default App;