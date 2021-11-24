<template>
  <base-button
    v-clipboard="() => value"
    v-clipboard:success="clipboardSuccessHandler"
    v-clipboard:error="clipboardErrorHandler"
    v-b-tooltip.hover
    variant="secondary"
    title="Copiar conteúdo"
    :disabled="(disabled !== null && disabled) || !value"
  >
    <i class="fas fa-copy -icon"></i>
    <span class="sr-only">Copiar conteúdo</span>
  </base-button>
</template>

<script>
export default {
  name: "CopyButton",
  inheritAttrs: false,
  props: {
    value: {
      type: null,
      required: true
    },
    disabled: {
      type: Boolean,
      default: null
    }
  },
  methods: {
    clipboardSuccessHandler({ value, event }) {
      event.preventDefault();
      this.$emit("success", value);
    },
    clipboardErrorHandler({ value, event }) {
      event.preventDefault();
      this.$emit("error", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.base-button {
  padding: 9px 11px 9px 10px;
  max-width: 2.5rem;
  .-icon {
    width: 19px;
    height: 22px;
    font-size: 1.5rem !important;
  }
}
</style>
