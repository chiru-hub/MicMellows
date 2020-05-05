export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Micmellows',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
            {
                rel: "stylesheet",
                href: "/css/framework.css"
            }
        ],
        script: [
            { src: "/js/jquery-3.4.1.slim.min.js" }
        ]
    },
    server: {

        host: '0.0.0.0'

    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/common',
        { src: '~/plugins/carousel.js', ssr: false },
    ],

    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
        'nuxt-purgecss',
    ],

//  purgeCSS: {
//         // your settings here

//         // mode: MODES.webpack,
//         enabled: ({ isDev, isClient }) => (!isDev && isClient), // or `false` when in dev/debug mode
//         paths: [
//             'components/**/*.vue',
//             'layouts/**/*.vue',
//             'pages/**/*.vue',
//             'plugins/**/*.js'
//         ],
//         styleExtensions: ['.css'],
//         whitelist: ['nav--shadowed'],
//         whitelistPatterns: [/^v-lazy-*/, /^slick-*/, /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).-move$/, /^router-link(|-exact)-active$/],
//         whitelistPatternsChildren: [/^v-lazy-*/, /^slick-*/],
//         extractors: [{
//             extractor: class {
//                 static extract(content) {
//                     return content.match(/[A-z0-9-:\\/]+/g)
//                 }
//             },
//             extensions: ['html', 'vue', 'js']
//         }]

//     },
//     tailwindcss: {
//         configPath: '~/config/tailwind.config.js',
//         cssPath: '~/assets/css/tailwind.css',
//         purgeCSSInDev: false,
//         exposeConfig: false
//     },



    /*
     ** Nuxt.js modules
     */
    modules: [
        'vue-scrollto/nuxt',
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        transpile: ['vue-slick'],     
        extend(config, ctx) {}
    }
}