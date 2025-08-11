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


const Artists = () => {

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
					<div className="text-center mb-12">
						<h1 className="text-5xl font-bold text-gray-800 mb-4">Artist Directory</h1>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Discover amazing artists from around the world. Explore their unique styles and creative journeys.
						</p>
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