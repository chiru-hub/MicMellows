/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    theme: {},
    variants: {},
    plugins: [],
    purge: {
        content: [
            './src/**/*.vue',
            // other content types mentioned above
        ],
        options: {
            whitelist: ['dark-header', 'other-class'],
            whitelistPatterns: [/^fa-/, /^svg-inline--fa/],
            whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
        }
    }
}