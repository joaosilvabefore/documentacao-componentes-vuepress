<template>
  <base-button
    :class="{ activated: activated }"
    class="angle-down-arrow-button px-2 -py-5 text-tertiary"
    variant="blank"
    v-on="$listeners"
    @click="activated = !activated"
  >
    <i :class="iconClass" class="fas fa-chevron-down -icon"></i>
  </base-button>
</template>

<script>
export default {
  name: "AngleDownArrowButton",
  props: {
    iconClass: {
      type: [String, Object, Array],
      default: () => null
    }
  },
  data() {
    return {
      activated: false
    };
  },
  watch: {
    activated(value) {
      this.$emit("change", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.angle-down-arrow-button {
  &.activated .-icon {
    transform: rotate(180deg);
  }

  .-icon {
    font-size: 14px;
    transition: transform 0.3s ease-in-out;
  }
}
</style>
