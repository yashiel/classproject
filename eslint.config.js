/*
 * Copyright (c)  2025. All rights reserved.
 *
 * Author : Yashi EL
 * github : github.com/yashiel
 *
 * This source code is licensed under the MIT, Apache 2.0 license
 * found in the LICENSE file in the root directory of this source tree
 */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import {defineConfig, globalIgnores} from 'eslint/config'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{js,jsx}'],
        extends: [
            js.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: {jsx: true},
                sourceType: 'module',
            },
        },
        rules: {
            'no-unused-vars': ['error', {varsIgnorePattern: '^[A-Z_]'}],
        },
    },
])