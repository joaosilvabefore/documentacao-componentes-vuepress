### How to use Toast

The Toast component extends [BootstrapVue's Toast](https://bootstrap-vue.org/docs/components/toast)
and it was designed to follow Academy's UX.

Toast's plugin injects the universal variable `$noitfy` into Vuex, Vue, Axios.

To use, you can simple call `this.$notify` and access one of the four methods available:

- _success_ -> to notify success messages
- _error_ --> to notify error messages
- _warning_ --> to notify alert messages
- _release_

> You have to pass a message parameter to the method, otherwise, it'll throw an error.

```html
<div>
  <b-button @click="$notify.success('Hello Success')">Show Toast Success</b-button>
  <b-button @click="$notify.error('Hello Error')">Show Toast Error</b-button>
  <b-button @click="$notify.warning('Hello Warning')">Show Toast Warning</b-button>
  <b-button @click="$notify.release('Hello Release')">Show Toast Release</b-button>
</div>
```
