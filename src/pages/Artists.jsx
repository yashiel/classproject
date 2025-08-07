/*
 * Copyright (c)  2025. All rights reserved.
 *
 * Author : Yashi EL
 * github : github.com/yashiel
 *
 * This source code is licensed under the MIT, Apache 2.0 license
 * found in the LICENSE file in the root directory of this source tree
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