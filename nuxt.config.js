export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Micmellows: Personality development & Communication skills course in Guwahati',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'keywords', name: 'keywords', content: 'Personality development, Communication skills' },
            { hid: 'description', name: 'description', content: 'No one is born public speaker, it’s a skill that can be learnt. Our personality development course will help to build confidence as well as build communication skills.' },

        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
            {
                rel: "stylesheet",
                href: "/css/framework.css?v=1"
            }
        ],
        script: [
            { src: "/js/jquery-3.4.1.slim.min.js" },
            {src:"https://use.fontawesome.com/5eca4a5f63.js"}
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
            '/blog/can-you-unlock',
            '/blog/wearing-mask-covid19-testing',
            '/blog/have-you-ever-been-a',
            '/blog/an-eye-opener-a-must-read-for-all-parents',
            '/blog/are-you-socially-responsible',
            '/blog/three-step-formula-to-get-better-at-any-conversation',
            '/blog/the-thankyou-list',
            '/blog/what-is-your-legacy',
            '/blog/leaders-neither-burn-the-bridges-nor-the-boats',
            '/blog/science-or-violence',
            '/blog/leadership-is-all-about-bending-mending-and-fending',
            '/blog/are-we-moving-in-the-wrong-direction'
        ]
    }
}
