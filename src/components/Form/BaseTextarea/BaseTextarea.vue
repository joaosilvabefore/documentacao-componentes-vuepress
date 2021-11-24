<template>
  <b-form-group :label-for="id" v-bind="$attrs">
    <b-form-textarea
      :id="id"
      :rows="$attrs.rows || '3'"
      :max-rows="$attrs['max-rows'] || '8'"
      :placeholder="$attrs.placeholder || 'Fale sobre você'"
      no-resize
      v-bind="$attrs"
      v-on="$listeners"
    ></b-form-textarea>
    <template v-for="slot in Object.keys($slots)" v-slot:[slot]>
      <slot :name="slot" />
    </template>
  </b-form-group>
</template>

<script>
export default {
  name: "BaseTextarea",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>
