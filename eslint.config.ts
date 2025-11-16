import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";
import typescriptParser from '@typescript-eslint/parser';

export default defineConfig([
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...tseslint.configs.recommended,
	{ files: ["**/*.{js,ts,tsx}"], languageOptions: { globals: globals.browser } },
	{ files: ["**/*.{js,ts,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{ts,tsx}"], 
    languageOptions: { 
      parser: typescriptParser, 
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      }, 
    } 
  },
  { files: ["**/*.{js,ts,tsx}"], 
    plugins: {'jsx-a11y': jsxA11y,}, 
    ...jsxA11y.flatConfigs.recommended,
    languageOptions: {
      ...jsxA11y.flatConfigs.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    },
  },
  {
    ignores: ["node_modules/**"],
  },
]);
