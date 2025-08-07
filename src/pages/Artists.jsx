/*
 * File: /Users/yashi/Desktop/classproject/src/pages/Artists.jsx
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



import React from 'react';
import ListItem from '../components/ListItem';


const artists = [
	{name: 'Artist 1', description: 'Description 1', image: 'https://via.placeholder.com/150'},
	{name: 'Artist 2', description: 'Description 2', image: 'https://via.placeholder.com/150'},
	{name: 'Artist 3', description: 'Description 3', image: 'https://via.placeholder.com/150'},
];




const Artists = () => {
	return (
		<div>
			<h1>Artists</h1>
			<div className="flex flex-col gap-4">
				{artists.map((artist) => (
					<ListItem key={artist.name} item={artist}/>
				))}
			</div>
		</div>
	);
};

export default Artists;