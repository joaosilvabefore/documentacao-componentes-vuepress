<template>
  <b-form-group :label-id="id" v-bind="$attrs">
    <b-form-spinbutton :id="id" class="mb-2" :placeholder="placeholder" v-bind="$attrs" v-on="$listeners"></b-form-spinbutton>
  </b-form-group>
</template>

<script>
export default {
  name: "BaseSpinButton",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: "1"
    }
  }
};
</script>
