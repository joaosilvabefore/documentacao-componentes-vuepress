<template>
  <b-form-group v-bind="$attrs">
    <b-form-radio-group :class="classGroup" :plain="plain" :stacked="stacked" v-bind="$attrs" v-on="$listeners"></b-form-radio-group>
  </b-form-group>
</template>

<script>
export default {
  name: "BaseRadioGroup",
  inheritAttrs: false,
  props: {
    stacked: {
      type: Boolean,
      default: true
    },
    plain: {
      type: Boolean,
      default: true
    },
    pill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classGroup() {
      return {
        "rounded-pill": this.pill
      };
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .rounded-pill {
  .btn {
    border-radius: 50rem !important;
    background-color: $silver;
    color: $white;

    &:not(:first-child) {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }
    &:not(:last-child) {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
  }
}
</style>
