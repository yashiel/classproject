/*
 * File: /Users/yashi/Desktop/classproject/src/data/appwrite.jsx
 * Project: /Users/yashi/Desktop/classproject
 * Created Date: Sunday August 10th 2025
 * Author: Yashi EL
 * -----
 * Last Modified: Sunday August 10th 2025 2:38:20 am
 * Modified By: the developer formerly known as Yashi EL at <hi@yashiel.com>
 * -----
 * Copyright (c) 2025 Yashi Digital Agency
 * -----
 * HISTORY:
 */

import { Client, Account, Databases, Storage, Avatars, ID } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
};

export const client = new Client();
client.setEndpoint(appwriteConfig.url).setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
export { ID };
