import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        exports: "writable",
        require: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        console: "readonly",
        define: "readonly",
        process: "readonly",
      },
    },
    rules: {
      "no-prototype-builtins": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^(suite|assertValidates)$" }],
      "no-redeclare": "warn",
      "no-useless-escape": "warn",
    },
  },
  {
    ignores: ["draft-*/**"],
  },
];
