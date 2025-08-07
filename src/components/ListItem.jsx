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