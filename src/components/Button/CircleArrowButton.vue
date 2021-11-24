<template>
  <b-button class="base-button icon-only" variant="blank" v-bind="$attrs" v-on="$listeners">
    <span :class="arrowDirection" class="-icon fas"></span>
  </b-button>
</template>
<script>
export default {
  name: "CircleArrowButton",
  props: {
    left: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    arrowDirection() {
      return this.left ? "fa-chevron-left" : "fa-chevron-right";
    }
  }
};
</script>

<style lang="scss" scoped>
.base-button {
  background: transparent;
  border-radius: 20px;
  border: 1px solid $green-light;
  width: 24px;
  height: 40px;

  &:hover {
    background-color: $green-light;
    .-icon {
      color: $white;
    }
  }

  &.icon-only {
    padding: $input-btn-padding-y;
    width: 40px;
    max-width: 40px;
  }

  .-icon {
    color: $green-light;
    font-size: 18px;
    transition: color 0.3s;
  }
}
</style>
