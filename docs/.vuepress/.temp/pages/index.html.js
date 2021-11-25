export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "pt-BR",
  "frontmatter": {
    "home": true,
    "heroText": "Before UI Kit",
    "tagline": "Vue.js Components",
    "actionText": "Get Started →",
    "actionLink": "/components/",
    "features": [
      {
        "title": "Simplicity First",
        "details": "Minimal setup with markdown-centered project structure helps you focus on writing."
      },
      {
        "title": "Vue-Powered",
        "details": "Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue."
      },
      {
        "title": "Performant",
        "details": "VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded."
      }
    ],
    "footer": "MIT Licensed | Copyright © 2018-present Evan You"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1637782863000,
    "contributors": [
      {
        "name": "Joao Batista Gomes Silva",
        "email": "joao.silva@before.com.br",
        "commits": 1
      },
      {
        "name": "João Batista Gomes Silva",
        "email": "joao.silva@before.com.br",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
