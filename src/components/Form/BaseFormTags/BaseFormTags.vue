<template>
  <base-form-group :label-for="id" v-bind="$attrs">
    <b-form-tags
      class="base-form-tags"
      :class="{ 'tag-md': md, 'tag-lg': lg }"
      :input-id="id"
      :name="$attrs.name || id"
      tag-class="-text-sm"
      tag-variant="secondary"
      remove-on-delete
      add-button-text="Adicionar"
      v-bind="$attrs"
      v-on="$listeners"
    ></b-form-tags>

    <template v-for="slot in Object.keys($slots)" v-slot:[slot]>
      <slot :name="slot" />
    </template>
  </base-form-group>
</template>

<script>
export default {
  name: "BaseFormTag",
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    md: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.base-form-tags {
  overflow-y: scroll;
  &.tag-md {
    padding-top: 6px !important;
    height: 40px !important;
    @include media-breakpoint-down(sm) {
      height: 48px !important;
    }
  }
  &.tag-lg {
    height: 112px !important;
    width: auto;
  }
}

::v-deep .b-form-tag:not(:nth-last-child(2)) {
  position: relative;
  margin-right: 0.75rem;

  &::after {
    content: ";";
    display: block;
    position: absolute;
    top: 0;
    right: -0.45rem;
    color: $tertiary;
    font-size: 1rem;
    font-weight: $font-weight-semibold;
  }
}
</style>
