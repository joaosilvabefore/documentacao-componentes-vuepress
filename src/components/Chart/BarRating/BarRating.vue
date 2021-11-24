<template>
  <div class="d-flex align-items-end -mb-10">
    <div
      v-for="index in ranges.length"
      :key="index"
      class="bar -ml-8 rounded"
      :class="activeColor(index)"
      :style="barStyle(index)"
    ></div>
  </div>
</template>
<script>
export default {
  name: "BarRating",
  props: {
    value: {
      type: [Number, String],
      required: true,
      default: 0,
    },
    barSize: {
      type: Number,
      default: 8
    },
    barDefaultColor: {
      type: String,
      default: "bg-silver"
    },
    ranges: {
      type: Array,
      default: () => {
        return [
          {
            min: false,
            max: 1,
            bars: 1,
            color: "bg-danger"
          },
          {
            min: 2,
            max: 2,
            bars: 2,
            color: "bg-warning"
          },
          {
            min: 3,
            max: 3,
            bars: 3,
            color: "bg-success"
          }
        ];
      }
    }
  },
  data() {
    return {
      activeRange: {},
      internalValue: 0
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue) {
        this.internalValue = newValue;
        this.updateColorBars();
      }
    }
  },

  mounted() {
    this.internalValue = this.value;
  },
  methods: {
    updateColorBars() {
      const selectRange = this.ranges.filter((range) => {
        if(!range.max && range.min) {
          return this.internalValue >= range.min;
        }
        else if(range.max && !range.min) {
          return this.internalValue <= range.max;
        }
        return this.internalValue >= range.min && this.internalValue <= range.max;
      });

      if (selectRange.length) {
        this.activeRange = selectRange[0];
      }
      else {
        this.activeRange = {
          min: 0,
          max: 0,
          bars: this.ranges.length,
          color: this.barDefaultColor
        };
      }
    },

    activeColor(index) {
      return index <= this.activeRange.bars ? this.activeRange.color : this.barDefaultColor;
    },

    barStyle(index) {
      return { width: `${1.5 * this.barSize}px`, height: `${index * this.barSize}px` };
    }
  }
};
</script>
