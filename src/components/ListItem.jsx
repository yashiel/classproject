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

function ListItem({ item }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full" />
        <div className="ml-3">
          <h3 className="text-lg font-medium">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
      </div>    
      <div className="flex items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;