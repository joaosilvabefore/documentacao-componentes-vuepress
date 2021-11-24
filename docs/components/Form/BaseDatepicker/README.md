> The Component uses flatpickr.js via the [Vue FlatPickr Component](https://github.com/ankurk91/vue-flatpickr-component).

_Example_

```html
  <base-datepicker
    id="members-expiresAtDate-field"
    v-model="form.expiresAtDate"
    :state="validateState('form', 'expiresAtDate')"
    placeholder="Informe uma data"
    name="expiresAtDate"
    label="Data de vencimento"
  ></base-datepicker>
```
