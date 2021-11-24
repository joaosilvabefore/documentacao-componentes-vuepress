### How to use Tabs

Tabs components extends [BootstrapVue's Tabs](https://bootstrap-vue.org/docs/components/tabs).

For more info on how to use the componente, checkout the webpage.

_Example: passing an array of content_

```
// Array must have this format
tabs: [
  title: "Tab", /* title of the tab */
  content: () => import("path_to_component") /* lazy loading component to be rendered in the content part of the tab */
]
```

```html
<b-card no-body>
  <tabs id="my-tab" fill card :tabs="tabs"></tabs>
</b-card>
```

```js
data() {
  return {
    tabs: [
      {
        title: "Tab1",
        content: () => import("@/components/pages/teste/Tab1.vue")
      },
      {
        title: "Tab2",
        content: () => import("@/components/pages/teste/Tab2.vue")
      }
    ]
  }
}
```

_components to be rendered in the tab content_

```html
// components/pages/teste/Tab1.vue
<template>
  <div>I'm the first tab</div>
</template>
```

```html
// components/pages/teste/Tab2.vue
<template>
  <div>I'm the second tab</div>
</template>
```

_Example: using `b-tab` component_

```html
// your component
<b-card no-body>
  <tabs fill card>
    <b-tab title="First" lazy active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second" lazy><p>I'm the second tab</p></b-tab>
  </tabs>
</b-card>

// using bootstrap vue component without our wrapper
<b-card no-body>
  <b-tabs fill card lazy>
    <b-tab title="First" lazy active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second" lazy><p>I'm the second tab</p></b-tab>
  </b-tabs>
</b-card>
```
