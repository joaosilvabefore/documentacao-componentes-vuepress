<template>
  <base-input
    class="search-field"
    :placeholder="$attrs.placeholder || 'Buscar por palavra-chave'"
    v-bind="$attrs"
    v-on="$listeners"
    @keypress.enter="$emit('search', $attrs.value)"
  >
    <template #append>
      <base-button
        v-b-tooltip.hover
        class="search-field__button ml-n2"
        variant="gradient-primary text-white"
        title="Buscar"
        @click="$emit('search', $attrs.value)"
      >
        <i class="far fa-search -icon"></i>
        <span class="sr-only">search</span>
      </base-button>
    </template>
  </base-input>
</template>

<script>
  export default {
    name: "SearchField",
  };
</script>

<style lang="scss" scoped>
  .search-field {
    /deep/ .form-control {
      z-index: 0;
    }

    &__button {
      padding: 11px 12px 12px 11px;

      .-icon {
        font-size: 17px;
      }
    }
  }
</style>
