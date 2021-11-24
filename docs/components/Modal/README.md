### How to use BaseModal

The Modal component extends [BootstrapVue's modal](https://bootstrap-vue.org/docs/components/modal) and applies Academy's UX.

To learn more about the component props, events and slots, 
access the BootstrapVue component page.

_JS Methods to handle modal events in the examples:_

```js
handleClose() {
  // do stuff before close modal on cancel event
},
handleOk() {
  // do stuff before close modal on ok event
},
```

_Example: Modal using v-b-modal_

```html
<base-button v-b-modal.base-modal-id>Open Modal</base-button>
<base-modal
  id="base-modal-id"
  title="Modal Title"
  @cancel="handleClose"
  @ok="handleOk"
>
  My Modal Content
</base-modal>
```

_Example: Modal using this.$bvModal_

```html
 <base-button @click="showModalWithBVModalEvent">Open Modal</base-button>
 <base-modal
  id="base-modal-open-with-event"
  title="Modal Title"
  @cancel="handleClose"
  @ok="handleOk"
>
  My Modal Content
</base-modal>
```

```js
showModalWithBVModalEvent() {
  // do some stuff before open modal
  this.$bvModal.show("base-modal-open-with-event");
}
```

_Example: Modal hide footer_

```html
 <base-button v-b-modal.modal-hide-footer>Open Modal</base-button>
 <base-modal
  id="modal-hide-footer"
  title="Modal Title"
  hide-footer
>
  My Modal Content
</base-modal>
```

_Example: Modal alert_

```html
 <base-button v-b-modal.modal-alert>Open Modal</base-button>
 <base-modal
  id="modal-alert"
  title="Modal Title"
>
  My Modal Content
</base-modal>
```
