/*
 * File: /Users/yashi/Desktop/classproject/src/data/database.jsx
 * Project: /Users/yashi/Desktop/classproject
 * Created Date: Sunday August 10th 2025
 * Author: Yashi EL
 * -----
 * Last Modified: Sunday August 10th 2025 2:38:33 am
 * Modified By: the developer formerly known as Yashi EL at <hi@yashiel.com>
 * -----
 * Copyright (c) 2025 Yashi Digital Agency
 * -----
 * HISTORY:
 */

import { databases } from "./appwrite";
import { ID } from "appwrite";

const db = {};

const collections = [
  {
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID_ARTISTS,
    name: "artists",
  },
  {
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID_EVENTS,
    name: "events",
  },
  {
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID_PRODUCTS,
    name: "products",
  },
  {
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID_CATEGORIES,
    name: "categories",
  },
  {
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID_REVIEWS,
    name: "reviews",
  },
  {
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID_ORDERS,
    name: "orders",
  },
];

collections.forEach((col) => {
  db[col.name] = {
    list: (queries = []) => {
      return databases.listDocuments(col.databaseId, col.collectionId, queries);
    },
    get: (documentId) => {
      return databases.getDocument(
        col.databaseId,
        col.collectionId,
        documentId
      );
    },
    create: (data, id = ID.unique(), permissions) => {
      return databases.createDocument(
        col.databaseId,
        col.collectionId,
        id,
        data,
        permissions
      );
    },
    update: (documentId, data) => {
      return databases.updateDocument(
        col.databaseId,
        col.collectionId,
        documentId,
        data
      );
    },
    delete: (documentId) => {
      return databases.deleteDocument(
        col.databaseId,
        col.collectionId,
        documentId
      );
    },
  };
});

export default db;
