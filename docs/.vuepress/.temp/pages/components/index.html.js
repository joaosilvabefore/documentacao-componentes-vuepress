export const data = {
  "key": "v-1020f180",
  "path": "/components/",
  "title": "Components",
  "lang": "pt-BR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Base Components",
      "slug": "base-components",
      "children": []
    }
  ],
  "filePathRelative": "components/README.md",
  "git": {
    "updatedTime": 1637844352000,
    "contributors": [
      {
        "name": "João Batista Gomes Silva",
        "email": "joao.silva@before.com.br",
        "commits": 2
      },
      {
        "name": "Joao Batista Gomes Silva",
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
