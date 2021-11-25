export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "pt-BR",
  "frontmatter": {
    "home": true,
    "heroText": "Before UI Kit",
    "tagline": "Vue.js Components",
    "actions": [
      {
        "text": "Components",
        "link": "/components",
        "type": "primary"
      },
      {
        "text": "Patterns",
        "link": "/patterns",
        "type": "default"
      }
    ],
    "features": [
      {
        "title": "Feature 1",
        "details": "Minimal setup with markdown-centered project structure helps you focus on writing."
      },
      {
        "title": "Feature 2",
        "details": "Minimal setup with markdown-centered project structure helps you focus on writing."
      },
      {
        "title": "Feature 3",
        "details": "Minimal setup with markdown-centered project structure helps you focus on writing."
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present Before"
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
