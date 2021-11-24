<template>
  <b-avatar
    :class="[$attrs.variant || '-default', { 'ratio-image': ratio }]"
    :aria-label="$attrs['aria-label'] || $attrs.alt"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <BaseImage
      :class="{ user: user }"
      :src="$attrs.src != 'null' ? $attrs.src : null"
      :icon="defaultImageIcon"
      :ratio="ratio"
    ></BaseImage>

    <template v-for="slot in Object.keys($slots)" v-slot:[slot]>
      <slot :name="slot" />
    </template>
  </b-avatar>
</template>

<script>
// For more info: https://bootstrap-vue.org/docs/components/avatar
export default {
  name: "Avatar",
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: "fas fa-image"
    },
    user: {
      type: Boolean,
      default: false
    },
    ratio: {
      type: Boolean,
      default: false
    },
    defaultUserIcon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    defaultImageIcon() {
      return this.user && !this.defaultUserIcon ? "fas fa-user" : this.icon;
    }
  }
};
</script>

<style lang="scss" scoped>
.b-avatar {
  &.-default.rounded-circle {
    /deep/ .default-image--icon {
      font-size: 1rem !important;
    }
  }
  &.ratio-image {
    max-width: 434px !important;
    height: 100% !important;
    /deep/ .b-avatar-custom {
      display: initial;
    }
    /deep/ .base-image {
      img {
        border-radius: $border-radius;
      }
    }
  }
  .user {
    /deep/ .default-image--icon {
      color: $tertiary;
    }
  }
}
</style>
