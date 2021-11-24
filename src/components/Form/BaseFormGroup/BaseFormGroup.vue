<template>
  <b-form-group :class="{ responsive: responsive }" v-bind="$attrs" v-on="$listeners">
    <template #label>
      <slot name="label"></slot>
    </template>

    <b-input-group :class="{ split: split, responsive: responsive }" v-bind="$attrs">
      <slot></slot>

      <template v-for="slot in Object.keys($slots)" v-slot:[slot]>
        <slot :name="slot" />
      </template>
    </b-input-group>
  </b-form-group>
</template>

<script>
export default {
  name: "BaseFormGroup",
  inheritAttrs: false,
  props: {
    split: {
      type: Boolean,
      default: false,
    },
    responsive: {
      type: Boolean,
      default: false,
    }
  }
};
</script>
