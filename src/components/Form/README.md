_Example: form validation_

```html
<b-form @submit.stop.prevent="onSubmit">
  <base-input
    id="url"
    v-model="$v.form.url.$model"
    label="URL"
    placeholder="URL"
    :state="validateState('form', 'url')"
    invalid-feedback="Insira uma url válida."
  >
    <template #append>
      <base-button type="submit">Submit</base-button>
      <base-button variant="link" class="text-muted" @click="resetForm">
        Reset
      </base-button>
    </template>
  </base-input>
</b-form>
```

```js
import { required } from "vuelidate/lib/validators";
import { formValidationMixin } from "@/mixins/mixin-form-validation";

export default {
  mixins: [formValidationMixin],
  data() {
    return {
      form: {}
    };
  },
  created() {
    this.newForm();
  },
  validations: {
    form: {
      url: { required }
    }
  },
  methods: {
    newForm() {
      this.form = {
        url: ""
      };
    },
    onSubmit() {
      this.$v.form.$touch();

      if (!this.$v.form.$anyError) {
        alert("Form submitted!");
      }
    }
  }
};
```

_Example: form grid with validation_

```html
<b-card>
  <b-form-row class="justify-content-end">
    <b-col md="6">
      <base-input
        id="name"
        v-model="$v.form.name.$model"
        :state="validateState('form', 'name')"
        invalid-feedback="Name is required"
        label="Nome"
        placeholder="Jhon"
      ></base-input>
    </b-col>
    <b-col md="6">
      <base-input
        id="surname"
        v-model="$v.form.surname.$model"
        :state="validateState('form', 'surname')"
        invalid-feedback="Surname is required"
        label="Sobrenome"
        placeholder="Doe"
      ></base-input>
    </b-col>
    <b-col cols="auto">
      <base-button @click="onSubmit">Submit</base-button>
    </b-col>
  </b-form-row>
</b-card>
```
