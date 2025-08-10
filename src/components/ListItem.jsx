/*
 * File: /Users/yashi/Desktop/classproject/src/components/ListItem.jsx
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
import { Link } from 'react-router';
import db from '../data/database';

function ListItem({ item }) {

const handleDelete = async () => {
  try {
    await db.artists.delete(item.$id);
  } catch (error) {
    console.error('Error deleting artist:', error);
  }
};







  return (
    <div className="flex items-center justify-between p-8 border-b border-gray-200 bg-gray-50">
      <div className="flex items-center gap-5">
        <div className="w-30 h-30 rounded-full overflow-hidden">
          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
        </div>
        <div className="ml-3">
          <h3 className="text-3xl font-semibold">{item.name}</h3>
          <p className="text-base text-gray-500">{item.bio}</p>
          <p className="text-sm text-gray-500">{item.genre}</p>
          <p className="text-sm text-gray-500">{item.country}</p>
          <Link to={item.websiteUrl} className='text-sm text-indigo-500 hover:text-amber-500 hover:underline transition-colors duration-300 ease-in-out'>Website</Link>
        </div>
      </div>    
      <div className="flex items-center gap-2">
        <Link to={`/artists/${item.$id}`} className='bg-indigo-500 text-white px-4 py-2 rounded-md text-sm'>Edit</Link>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;