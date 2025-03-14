const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'In-depth vue',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    sidebarDepth: 1,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Content',
        link: '/vue-ebook/0.html',
      },
      {
        text: 'Translate Github',
        link: 'https://github.com/khanhtl/vue-ebook'
      },
      {
        text: 'Origin Github',
        link: 'https://github.com/godbasin/vue-ebook'
      }
    ],
    sidebar: {
      '/vue-ebook/': [
        {
          title: 'Lời nói đầu',
          collapsable: false,
          children: [
            '/vue-ebook/0',
          ]
        },
        {
          title: 'Phần 1: Vue Quick Start',
          collapsable: false,
          children: [
            '/vue-ebook/1',
            '/vue-ebook/2',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
