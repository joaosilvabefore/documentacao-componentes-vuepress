<template>
  <multiselect :show-labels="false" v-bind="selectAttrs" v-on="$listeners">
    <template #caret="{ toggle }">
      <div class="select-arrow">
        <i class="fas fa-angle-down" @mousedown.prevent.stop="toggle"></i>
      </div>
    </template>

    <!-- Translate noOptions message -->
    <template #noOptions>
      Essa lista está vazia
    </template>

    <!-- Translate norResult message -->
    <template #noResult>
      Nenhum dado encontrado
    </template>

    <!-- Pass on all named slots -->
    <template v-for="slot in Object.keys($slots)" v-slot:[slot]>
      <slot :name="slot" />
    </template>

    <!-- Pass on all scoped slots -->
    <template v-for="slot in Object.keys($scopedSlots)" v-slot:[slot]="scope">
      <slot v-bind="scope" :name="slot" />
    </template>
  </multiselect>
</template>

<script>
import Multiselect from "vue-multiselect";

// see props in https://vue-multiselect.js.org/#sub-props
export default {
  name: "CustomSelect",
  components: { Multiselect },
  inheritAttrs: false,
  props: {
    optionLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    selectAttrs() {
      return {
        ...this.$attrs,
        placeholder: this.$attrs.placeholder || "Selecione",
        name: this.$attrs.name || this.$attrs.id,
        label: this.optionLabel
      };
    }
  }
};
</script>

<style lang="scss" scoped>
// global multiselect styles: @/assets/scss/_vendors-extensions.scss
.multiselect {
  &--active {
    .select-arrow {
      color: $tertiary !important;
      transform: rotate(-180deg);
    }
  }

  .select-arrow {
    position: absolute;
    right: 0;
    padding: $multiselect-padding-y 10px;
    color: $silver;
    transition: transform 0.3s, transform 0.4s;
    cursor: pointer;
    @include media-breakpoint-down(sm) {
      padding: 14px 10px;
    }
  }

  /deep/ &__single,
  /deep/ &__placeholder {
    display: inline-block;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
