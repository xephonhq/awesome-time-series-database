module.exports = {
    title: 'Awesome Time Series Database',
    description: 'A curated list of awesome time series databases, benchmarks and papers',
    themeConfig: {
        repo: 'xephonhq/awesome-time-series-database',
        editLinks: true,
        docsDir: 'docs',
        // nav: [
        //     {text: 'Guide', link: '/guide/'},
        // ],
        // sidebar: [
        //     '/',
        //     '/get-started.md',
        //     '/go.md',
        //     '/k8s.md',
        // ]
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/last-updated',
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-84338852-2'
            }
        ]
    ]
}