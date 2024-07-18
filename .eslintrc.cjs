/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  ignorePatterns: [
    "!.*",
    "/coverage/**",
    "/dist/**",
    "/es/**",
    "/node_modules/**"
  ],
  env: {
    browser: true,
    es2022: true
  },
  extends: ["./.eslintrc.base.cjs", "./.eslintrc.react.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2022,
    project: "tsconfig.json",
    sourceType: "module"
  },
  rules: {
    "@cspell/spellchecker": [
      "warn",
      {
        cspell: {
          words:
            // @sorted
            ["decrementor", "escompat", "pressable", "sonarjs"]
        }
      }
    ],
    "@typescript-eslint/no-namespace": "off",
    "etc/no-internal": "off"
  }
};

module.exports = config;
