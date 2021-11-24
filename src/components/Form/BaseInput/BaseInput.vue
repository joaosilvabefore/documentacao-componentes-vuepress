<template>
  <base-form-group :label-for="id" v-bind="$attrs">
    <template #label>
      <slot name="label"></slot>
    </template>
    <b-form-input
      :id="id"
      :aria-describedby="`${id}_feedback`"
      :disabled="disabled"
      v-bind="$attrs"
      @input="cleanAsyncError"
      v-on="$listeners"
    ></b-form-input>

    <b-form-invalid-feedback
      v-if="!$attrs.state && errors[errorProp] && errors[errorProp].length"
      :state="$attrs.state"
      aria-live="assertive"
      aria-atomic="true"
      tab-index="-1"
      role="alert"
    >
      <span v-for="(err, i) in errors[errorProp]" :key="`${id}_error_${i}`" class="d-block" v-text="err"></span>
    </b-form-invalid-feedback>

    <template v-if="!noAppend" #append>
      <slot name="append"></slot>
    </template>
  </base-form-group>
</template>

<script>
import isEmpty from "lodash.isempty";
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ""
    },
    noAppend: {
      type: Boolean,
      default: false
    },
    errors: {
      type: Object,
      default: () => ({})
    },
    errorProp: {
      type: String,
      default: ""
    }
  },
  methods: {
    cleanAsyncError() {
      const { errors, errorProp } = this;

      if (!errors || isEmpty(errors)) return;

      if (errors[errorProp]) {
        delete errors[errorProp];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  height: 48px;
  @include media-breakpoint-up(md) {
    height: 40px;
  }
}
</style>
