<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    variant: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean
    },
    block: {
      type: Boolean
    },
    rounded: { 
      type: Boolean
    }
  },
  setup(props) {
    const roundedClass = computed(() => props.rounded ? 'btn-rounded' : '' );
    const disabledClass = computed(() => props.disabled ? 'btn-disabled' : '' );
    const buttonClass = computed(() => `btn btn-${props.variant} ${roundedClass.value} ${disabledClass.value}`);
    return {
      buttonClass
    }
  },
});
</script>

<template>
  <button v-bind="$attrs" :class="buttonClass"><slot></slot></button>
</template>

<style lang="scss" scoped>
  $variants: (default: #ccc, primary: #0084ff, secondary: #e96900, success: #43A047, danger: #E53935, warning: #FFB300);
  $variantColors: (default: #333, primary: #fff, secondary: #fff, success: #fff, danger: #fff, warning: #222);
  
  @each $variantName, $color in $variants {
    .btn-#{$variantName} {
      background-color: $color;
      color: map-get($variantColors, $variantName);
      &:hover {
        background-color: rgba($color, 0.8);
      }
    }
  }

  .btn {
    border: none;
    padding: 8px 32px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 2px;

    &-disabled {
      opacity: 0.7;
      cursor: no-drop;
    }
  }

  .btn-rounded {
    border-radius: 20px;
  }
</style>