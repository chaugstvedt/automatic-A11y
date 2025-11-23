import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";

export default defineConfig([
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...tseslint.configs.recommended,
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
