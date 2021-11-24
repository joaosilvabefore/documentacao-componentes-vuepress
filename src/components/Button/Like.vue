<template>
  <div class="d-flex align-items-center">
    <base-button
      v-b-tooltip.hover
      :class="{ active: data.like_flag === true }"
      class="btn-like p-0 mr-3"
      variant="link"
      title="Gostei"
      @click="updateLike"
    >
      <i class="fas fa-thumbs-up"></i>
      <span class="sr-only">Botão de Like</span>
    </base-button>
    <base-button
      v-b-tooltip.hover
      :class="{ active: data.like_flag === false }"
      class="btn-like p-0"
      variant="link"
      title="Não gostei"
      @click="updateDislike"
    >
      <i class="fas fa-thumbs-down"></i>
      <span class="sr-only">Botão de Dislike</span>
    </base-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LikeButton",
  props: {
    courseCode: {
      type: String,
      required: true
    },
    lessonCode: {
      type: String,
      required: true
    },
    likeFlag: {
      type: Boolean,
      default: () => null
    }
  },
  data() {
    return {
      data: {
        like_flag: this.likeFlag
      }
    };
  },
  methods: {
    async updateLike(event) {
      this.data.like_flag = this.data.like_flag ? null : true;
      await this.likeLesson({
        courseCode: this.courseCode,
        lessonCode: this.lessonCode,
        data: this.data
      });
    },
    async updateDislike(event) {
      this.data.like_flag = this.data.like_flag === false ? null : false;
      await this.likeLesson({
        courseCode: this.courseCode,
        lessonCode: this.lessonCode,
        data: this.data
      });
    },

    ...mapActions("course", ["likeLesson"])
  }
};
</script>

<style lang="scss" scoped>
.btn-like {
  color: $tertiary;
  font-size: 24px;

  @include hover-active {
    color: var(--academy-theme-primary-color) !important;
  }
}
</style>
