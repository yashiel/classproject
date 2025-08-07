/*
 * Copyright (c)  2025. All rights reserved.
 *
 * Author : Yashi EL
 * github : github.com/yashiel
 *
 * This source code is licensed under the MIT, Apache 2.0 license
 * found in the LICENSE file in the root directory of this source tree
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
});