/*
 * File: /Users/yashi/Desktop/classproject/vite.config.js
 * Project: /Users/yashi/Desktop/classproject
 * Created Date: Sunday August 3rd 2025
 * Author: Yashi EL
 * -----
 * Last Modified: Sunday August 3rd 2025 12:07:30 am
 * Modified By: the developer formerly known as Yashi EL at <hi@yashiel.com>
 * -----
 * Copyright (c) 2025 Yashi Digital Agency
 * -----
 * HISTORY:
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
