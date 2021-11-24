<template>
  <base-button :id="nameFlag" :disabled="disabled" variant="link" class="btn-favorite" @click.prevent="handleFavorite">
    <span :class="favoriteIcon" class="-icon fa-heart"></span>
    <span class="sr-only">Favoritar</span>
  </base-button>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  name: "BtnFavorite",
  props: {
    favorite: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: "button"
    }
  },
  computed: {
    nameFlag() {
      return `__${this.name}__favorite__`;
    },
    favoriteIcon() {
      return this.favorite ? "fas" : "far";
    }
  },
  methods: {
    handleFavorite: debounce(function () {
      this.$emit("update:favorite");
    }, 300)
  }
};
</script>

<style lang="scss" scoped>
.btn-favorite {
  margin: 0px;
  padding: 0.25rem 0.5rem;
  color: $white;
  border-radius: 0.25rem;
  background: rgba(0, 0, 0, 0.7);
  max-height: 26px;
  transition: all 0.3s;
  .-icon {
    font-size: 14px;
  }

  .fas {
    color: $danger;
  }

  @include hover-focus-active {
    background: $white;
    box-shadow: $box-shadow-hover;
    opacity: 1;

    .-icon {
      color: $danger;
    }
  }
}
</style>
