module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    rules: {
        // override/add rules settings here, such as:
        indent: ["error", 4, { SwitchCase: 1 }],
        "vue/html-indent": ["error", 4],
        semi: [2, "never"]
    }
}
