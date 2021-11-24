<template>
  <base-input
    class="copy-field"
    :invalid-feedback="!hideFeedbackText ? $attrs['invalid-feedback'] || 'Erro ao copiar' : null"
    :valid-feedback="!hideFeedbackText ? $attrs['valid-feedback'] || 'Copiado com sucesso' : null"
    :state="copyStatusState"
    disabled
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #append>
      <copy-button
        :value="$attrs.value"
        :disabled="$attrs.disabled || !$attrs.value"
        variant="secondary"
        class="ml-n2"
        @success="clipboardSuccessHandler"
        @error="clipboardErrorHandler"
      ></copy-button>
    </template>
  </base-input>
</template>

<script>
const COPY_STATUS_STATE = {
  success: true,
  error: false
};

export default {
  name: "CopyField",
  inheritAttrs: false,
  props: {
    showTextTimer: {
      type: Number,
      default: 3000
    },
    hideFeedbackText: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      copyStatus: null
    };
  },
  computed: {
    copyStatusState() {
      return COPY_STATUS_STATE[this.copyStatus] || null;
    }
  },
  methods: {
    clipboardSuccessHandler() {
      this.copyStatus = "success";
      this.resetStatus();
    },
    clipboardErrorHandler() {
      this.copyStatus = "error";
      this.resetStatus();
    },
    resetStatus() {
      setTimeout(() => {
        this.copyStatus = null;
      }, this.showTextTimer);
    }
  }
};
</script>
