module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: [0, "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-unused-components": "off",
    "vue/require-v-for-key": "warn",
    "vue/no-unused-vars": "warn",
    "vue/no-v-for-template-key": "warn",
    "vue/comment-directive": [
      "error",
      {
        reportUnusedDisableDirectives: false,
      },
    ],
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
