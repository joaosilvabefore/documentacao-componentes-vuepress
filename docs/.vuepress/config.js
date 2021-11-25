module.exports = {
  lang: 'pt-BR',
  title: 'Before UI Kit',
  description: 'Vue.js Components',
  backToHome: 'Voltar para o início',
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-active-header-links',
    '@vuepress/plugin-search',
    {
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    },
  ],
  themeConfig: {
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Components',
        link: '/components/',
      },
    ],
  },
}