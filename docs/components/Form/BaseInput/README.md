# BaseInput
if you don't need state validation, label or append something onto the input, better to work with [`b-form-input`](https://bootstrap-vue.org/docs/components/form-input) alone.


## How to use

```html
<base-input id="name" label="Name" v-model="name" placeholder="Your name"></base-input>
```

### Example: one line input with button_

```html
<base-input id="name" v-model="name" label="Name" placeholder="Your name">
  <template #append>
    <base-button>Button</base-button>
  </template>
</base-input>
```

### Example: one line input with button split_

```html
<base-input id="name" v-model="name" label="Name" placeholder="Your name" split>
  <template #append>
    <base-button>Button</base-button>
  </template>
</base-input>
```

### Example: Responsive: Regular size on Desktop and Large size on Mobile_

> need to pass the `responsive` prop
> it only works on `size="md"` (default) base-input, so it doesn't break the other size inputs - under analises

```html
<base-input label="Responsive input" placeholder="regular" responsive>
  <template #append>
    <base-button>Button</base-button>
  </template>
</base-input>
```

## Props
|Name   | Type  | Default  | Description  |
|---|---|---|---|
| errors |  Object | {}  | Validation errors  |
| error |  string | ""  | Prop of error returned inside response API |

## Events
|Name   | Type  | Default  | Description  |
|---|---|---|---|
| errors |  Object | {}  | Validation errors  |
| error |  string | ""  | Prop of error returned inside response API |