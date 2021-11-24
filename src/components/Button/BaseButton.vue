<template>
  <b-button
    class="base-button"
    :class="buttonClasses"
    :disabled="$attrs.disabled || loading"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-if="loading">
      <b-spinner small variant="light" class="-mr-4" label="Loading..."></b-spinner>
      {{ loadingText }}
    </template>

    <template v-else>
      <span
        v-if="icon"
        :class="[icon, iconClasses]"
        :style="$slots.default ? 'margin-right: 11px;' : null"
        class="-icon"
      ></span>

      <slot></slot>
    </template>
  </b-button>
</template>

<script>
export default {
  name: "BaseButton",
  inheritAttrs: false,
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: "Aguarde"
    },
    icon: {
      type: String,
      default: ""
    },
    elevated: {
      type: Boolean,
      default: false
    },
    iconClasses: {
      type: [String, Array, Object],
      default: () => {}
    }
  },
  computed: {
    buttonClasses() {
      return [
        {
          "icon-only": !this.$slots.default,
          "btn-elevated": this.elevated
        }
      ];
    }
  }
};
</script>

<style lang="scss">
// deixar fora do scoped para a classe .base-button pode ser utilizada fora do componente
.btn.base-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  transition: 0.3s;

  @include media-breakpoint-up(md) {
    flex: unset;
    height: 40px;
  }

  &.disabled,
  &:disabled {
    background: $silver;
    cursor: default !important;
  }

  &.btn-sm {
    height: 40px;
    @include media-breakpoint-up(md) {
      height: 32px;
    }
  }

  &.btn-xs {
    height: 32px;
    @include media-breakpoint-up(md) {
      height: 24px;
    }
  }

  &.icon-only {
    padding: $input-btn-padding-y;
    width: 40px;
    max-width: 40px;

    &.btn-sm {
      padding: $input-btn-padding-y-sm;
      width: 32px;
      max-width: 32px;
    }
  }

  &.bg-none {
    padding: $input-btn-padding-y-lg;
    background: none;
    &:active {
      background: none;
    }
  }

  .-icon {
    font-size: 18px;
  }

  &.btn-add:not(:disabled):not(.disabled) {
    @include hover-focus-active {
      color: $green !important;
    }
  }

  &.btn-remove:not(:disabled):not(.disabled) {
    @include hover-focus-active {
      color: $danger !important;
    }
  }

  &.btn-edit:not(:disabled):not(.disabled) {
    @include hover-focus-active {
      color: $cyan !important;
    }
  }

  &.btn-elevated {
    border-radius: 324px !important;

    &,
    &:focus,
    &:active,
    &.active {
      box-shadow: $box-shadow-main !important;
    }
  }
}
</style>
