<template>
  <base-button
    class="base-upload-file"
    :variant="$attrs['variant'] || 'link'"
    loading-text="carregando..."
    v-bind="$attrs"
    @click="showFileChooser"
  >
    <slot>
      <i class="fas fa-arrow-from-bottom fa-lg mr-2"></i>
      Carregar foto
    </slot>
    <b-form-file
      :id="id"
      ref="bvFormFile"
      class="d-none"
      type="file"
      name="image"
      :accept="$attrs.accept || 'image/jpeg, image/png'"
      v-bind="$attrs"
      v-on="$listeners"
    ></b-form-file>
  </base-button>
</template>

<script>
export default {
  name: "BaseUploadFile",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    showFileChooser() {
      const { bvFormFile } = this.$refs;
      bvFormFile.$refs.input.click();
    },

    reset() {
      const { bvFormFile } = this.$refs;
      bvFormFile.reset();
    }
  }
};
</script>

<style lang="scss" scoped></style>
