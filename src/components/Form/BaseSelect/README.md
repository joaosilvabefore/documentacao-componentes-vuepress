_Example: base-select with an array of object_

```html
<base-select
  id="my-multiselect"
  v-model="value"
  label="Languages"
  option-label="name"
  track-by="language"
  :options="options"
></base-select>
```

```js
  data () {
    return {
      value: null,
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  }
```
