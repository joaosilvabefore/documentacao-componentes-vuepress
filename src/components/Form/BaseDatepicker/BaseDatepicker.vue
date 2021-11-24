<template>
  <base-form-group :label-for="id" v-bind="$attrs">
    <flat-pickr
      :id="id"
      :aria-describedby="`${id}_feedback`"
      :config="configOptions"
      :class="customClasses"
      class="form-control"
      v-bind="$attrs"
      v-on="$listeners"
    ></flat-pickr>

    <template #append>
      <slot name="append"></slot>
    </template>
  </base-form-group>
</template>

<script>
/**
 * Extends vue-flatpickr-component
 * @See https://github.com/ankurk91/vue-flatpickr-component
 */
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { Portuguese } from "flatpickr/dist/l10n/pt.js";
import { isNullOrUndefined } from "@/utils";

const DEFAULT_CONFIG = {
  wrap: true, // set wrap to true only when using 'input-group'
  allowInput: true,
  altFormat: "d/m/Y",
  altInput: true,
  dateFormat: "Y-m-d",
  locale: Portuguese
};
export default {
  name: "BaseDatepicker",
  components: {
    flatPickr
  },
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
    config: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    configOptions() {
      return { ...DEFAULT_CONFIG, ...this.config };
    },

    customClasses() {
      const classes = [];
      const hasState = !isNullOrUndefined(this.$attrs.state);
      if (hasState && (this.$attrs["invalid-feedback"] || this.$attrs["valid-feedback"])) {
        const validation = this.$attrs.state ? "is-valid" : "is-invalid";
        classes.push(validation);
      }

      return classes;
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .form-control {
  @include media-breakpoint-down(sm) {
    height: 48px !important;
  }
}
</style>
