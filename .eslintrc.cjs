const customHooks =
  // @sorted
  [
    "useAsyncCallback",
    "useAsyncCallbackBusyState",
    "useAsyncInterval",
    "useAsyncUpdater",
    "useBooleanConfig",
    "useDeferredCallback",
    "useDeferredUpdater",
    "useDelayedCallback",
    "useDelayedUpdater",
    "useDerivedValue",
    "useEnumConfig",
    "useInterval",
    "useResource",
    "useStateConfig",
    "useUpdater"
  ];

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
  extends: ["union", "union/react"],
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
            ["cjsx", "decrementor", "mjsx", "packagejson", "pressable"]
        }
      }
    ],
    "@typescript-eslint/no-namespace": "off",
    "etc/no-internal": "off",
    "react-hooks/exhaustive-deps": [
      "warn",
      { additionalHooks: `^(${customHooks.join("|")})$` }
    ]
  }
};

module.exports = config;
