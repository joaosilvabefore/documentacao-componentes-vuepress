<template>
  <base-form-group :label-for="id" v-bind="$attrs">
    <custom-select :id="id" :class="customSelectClasses" v-bind="$attrs" v-on="$listeners">
      <template v-for="slot in Object.keys($slots)" v-slot:[slot]>
        <slot :name="slot" />
      </template>
    </custom-select>

    <template v-for="slot in Object.keys($slots)" v-slot:[slot]>
      <slot :name="slot" />
    </template>
  </base-form-group>
</template>

<script>
import { isNullOrUndefined } from "@/utils";
export default {
  name: "BaseSelect",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    customSelectClasses() {
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

<style lang="scss" scoped></style>
