<template>
  <base-form-group :label-for="id" class="base-input-number" v-bind="$attrs">
    <b-form-input
      :id="`${id}_input_number`"
      v-model="localValue"
      :placeholder="$attrs['placeholder'] || null"
      :aria-describedby="`${id}_feedback`"
      :disabled="disabled"
      :min="min"
      :max="max"
      number
      @keydown.up="increaseValue"
      @keydown.down="decreaseValue"
      @input.native="handleNativeInput"
    ></b-form-input>

    <template #append>
      <BaseButton class="base-input-number--action py-0 px-2" variant="transparent" @click="increaseValue">
        <i class="far fa-angle-up fa-lg"></i>
        <span class="sr-only">Aumentar o número em 1</span>
      </BaseButton>
      <BaseButton class="base-input-number--action py-0 px-2" variant="transparent" @click="decreaseValue">
        <i class="far fa-angle-down fa-lg"></i>
        <span class="sr-only">Diminuir o número em 1</span>
      </BaseButton>
    </template>
  </base-form-group>
</template>

<script>
const NOT_A_NUMBER_REGX = /[^0-9]/g;

export default {
  name: "BaseInputNumber",
  inheritAttrs: false,
  props: {
    value: {
      type: null,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ""
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit("input", this.sanitizeInputValue(newVal));
      }
    }
  },
  methods: {
    sanitizeInputValue(newValue) {
      const input = document.getElementById(`${this.id}_input_number`);
      let inputValue = newValue;

      if (this.checkNaNInput(inputValue)) {
        inputValue = input.value.replace(NOT_A_NUMBER_REGX, "");
      }

      if (+inputValue > this.max) {
        inputValue = this.max;
      }

      if (+inputValue < this.min) {
        inputValue = this.min;
      }

      return inputValue > 0 ? +inputValue : 0;
    },

    handleNativeInput(evt) {
      evt.target.value = this.sanitizeInputValue(evt.target.value);
    },

    checkNaNInput(inputValue) {
      return NOT_A_NUMBER_REGX.test(inputValue);
    },

    increaseValue() {
      const increasedValue = this.localValue + 1;
      if (increasedValue >= this.localValue) {
        this.localValue = increasedValue;
      }
    },

    decreaseValue() {
      const decreasedValue = this.localValue - 1;
      if (decreasedValue <= this.localValue) {
        this.localValue = decreasedValue;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .input-group-append {
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
  .btn {
    height: auto;
  }
}

.base-input-number {
  &--action {
    color: $silver;
    transition: color 0.3s;
    @include hover-focus-active {
      color: $tertiary;
    }
  }
  .form-control {
    height: $input-height-lg;
    @include media-breakpoint-up(md) {
      height: $input-height;
    }
  }
}
</style>
