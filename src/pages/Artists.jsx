/*
 * File: /Users/yashi/Desktop/classproject/src/pages/Artists.jsx
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



import ListItem from '../components/ListItem';
import db from '../data/database';
import { useState, useEffect } from 'react';
import { Query } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Artists = () => {
const navigate = useNavigate();
const { user } = useAuth();
const [artists, setArtists] = useState([]);
const [loading, setLoading] = useState(true);


const listArtists = async () => {
	try {
		const response = await db.artists.list([Query.orderAsc('name')]);
		setArtists(response.documents);
		setLoading(false);
		return response;
	} catch (error) {
		console.error('Error fetching artists:', error);
		setLoading(false);
		setArtists([]);
	}
};

useEffect(() => {
	listArtists();
}, []);

if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;


	return (
		<>
			<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pb-24">
				<div className="container mx-auto px-6 py-8">
					<div className="relative mb-12">
						<div className="text-center">
							<h1 className="text-5xl font-bold text-gray-800 mb-4">Artist Directory</h1>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Discover amazing artists from around the world. Explore their unique styles and creative journeys.
							</p>
						</div>
						{user && (
							<button
								onClick={() => navigate('/add-artist')}
								className="absolute top-0 right-0 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
								</svg>
								Add New Artist
							</button>
						)}
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
						{artists.map((artist) => (
							<ListItem key={artist.$id} item={artist}/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Artists;