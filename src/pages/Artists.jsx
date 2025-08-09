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

const artists = [
	{name: 'Artist 1', description: 'Description 1', image: 'https://picsum.photos/200?random=6'},
	{name: 'Artist 2', description: 'Description 2', image: 'https://picsum.photos/200?random=10'},
	{name: 'Artist 3', description: 'Description 3', image: 'https://picsum.photos/200?random=4'},
];




const Artists = () => {
	return (
		<>
			<h1>Artists</h1>
			<div className="flex flex-col gap-4 ">
				{artists.map((artist) => (
					<ListItem key={artist.name} item={artist}/>
				))}
			</div>
		</>
	);
};

export default Artists;