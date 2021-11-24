> component works as a wrapper to offer proper form validation and label alignment

More info on [Bootstrap Vue FormGroup component](https://bootstrap-vue.org/docs/components/form-group).

_Example_

```html
<base-form-group :label-for="id" v-bind="$attrs">
  <b-form-input
    :id="id"
    :aria-describedby="`${id}_feedback`"
    :disabled="disabled"
    v-bind="$attrs"
    v-on="$listeners"
  ></b-form-input>

  <template #append>
    <slot name="append"></slot>
  </template>
</base-form-group>
```

_Example: splitting append from input_

```html
<base-form-group label-for="name" split>
  <b-form-input
    id="name"
    v-model="name"
    placeholder="Search for name"
  ></b-form-input>

  <template #append>
    <base-input icon="search" @click="handleSearch"></base-input>
  </template>
</base-form-group>
```
