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
                href: "/css/framework.css?v=1"
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
        { src: '~plugins/ga.js', ssr: false },
        '~/plugins/plyr.js'
    ],

    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
        // 'nuxt-purgecss',
    ],

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
    },
    generate: {
        routes: [
            '/blog/why-hospitals-are-safer-than-bazaars-in-this-pandemic-an-analogy-from-a-speakers-perspective',
            '/blog/covid-19-pandemic-crisis-can-be-craftily-used-to-plough-through-long-pending-deep-rooted-structural-economical-and-behavioral-reforms',
            '/blog/be-the-mask-warriors-of-assam',
            '/blog/fear-of-unknown',
            '/blog/make-in-india',
            '/blog/suicide-is-as',
            '/blog/switchtrack-the-curse-of-effective',
            '/blog/ask-rightfully-for-your-rights',
            '/blog/hearing-not-listening',
            '/blog/can-you-unlock'
        ]
    }
}
