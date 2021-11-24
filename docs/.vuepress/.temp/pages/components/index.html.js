export const data = {
  "key": "v-1020f180",
  "path": "/components/",
  "title": "Components",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Base Components",
      "slug": "base-components",
      "children": []
    },
    {
      "level": 2,
      "title": "Others",
      "slug": "others",
      "children": []
    }
  ],
  "filePathRelative": "components/README.md",
  "git": {
    "updatedTime": null,
    "contributors": []
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
