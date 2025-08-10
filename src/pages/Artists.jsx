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
			<h1>Artists</h1>
			<div className="flex flex-col gap-4 ">
				{artists.map((artist) => (
					<ListItem key={artist.$id} item={artist}/>
				))}
			</div>
		</>
	);
};

export default Artists;