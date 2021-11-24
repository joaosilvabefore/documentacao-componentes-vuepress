<template>
  <base-form-group :label-for="id" class="base-rangepicker">
    <template #label>
      {{ $attrs['label'] }}
    </template>
    
    <div class="base-rangepicker__wrapper">
      <date-range-picker
        v-bind="$attrs"
        v-on="$listeners"
        ref="dateRangerPicker"
        :date-format="dateFormat"
        :locale-data="locale"
        :ranges="ranges"
        :date-range="dateRange"
        @update="handleUpdate"
      >
        <template #input="picker">
          <template v-if="picker.startDate || picker.endDate">
            {{ picker.rangeText  }}
          </template>
          <template v-else>
            Vitalício
          </template>
        </template>
      </date-range-picker>

      <base-button variant="gradient-primary" class="text-white" @click.stop="toggle()">
        <i class="fa fa-table"></i>
      </base-button>
    </div>
  </base-form-group>
</template>

<script>
  import DateRangePicker from 'vue2-daterange-picker';
  import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';
  import { DEFAULT_LOCALE, DEFAULT_RANGES } from './helpers/constants';
  
  export default {
    components: { DateRangePicker },
    data() {
      return {
        dateRange: {
          startDate: null,
          endDate: null,
        },
        status: false
      }
    },
    props: {
      id: {
        type: String,
        default: '',
        required: true
      },
      value: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },

    computed: {
      locale() {
        return DEFAULT_LOCALE;
      },

      ranges() {
        return DEFAULT_RANGES;
      }
    },

    methods: {
      dateFormat (classes, date) {
        if (!classes.disabled) {
          classes.disabled = date.getTime() < new Date();
        }
        return classes;
      },
      toggle() {
        this.$refs.dateRangerPicker.togglePicker();
      },
      handleUpdate(value) {
        this.$emit('input', value);
      }
    },
  }
</script>


<style lang="scss">
.base-rangepicker {
  &__wrapper {
    margin-bottom: 24px;
    width: 100%;
    display: flex;
    height: 39px;
    align-items: center;

    
    /* daterangepicker overrides */
    .vue-daterange-picker {
      font-family: "Montserrat" !important;
      z-index: 100 !important;

      .calendars {
        display: flex;
        flex-wrap: nowrap;
      }
      .applyBtn {
        background: $secondary;
      }
      .cancelBtn {
        background: transparent;
        color: $tertiary;
      }

      .drp-calendar.left {
        border-left: unset !important;
      }

      .drp-selected {
        display: none;
      }

      td.off,
      td.off.in-range,
      td.off.start-date,
      td.off.end-date {
        background-color: white !important;
      }

      td.active,
      td.active:hover,
      .ranges li.active {
        background-color: #03b4ae !important;
      }

      &.show-calendar .drp-buttons {
        border-top: 1px solid rgba(221, 221, 221, 0.4) !important;
      }

      .drp-buttons .drp-selected {
        padding: 11px 1rem;
        margin-bottom: 0.5rem;
        text-align: center;
      }

      .drp-buttons button {
        font-size: 14px !important;
        padding: 11px 30px 12px 30px !important;
        margin-left: 0 !important;
      }

      @media (min-width: 564px) {
        .drp-buttons button {
          margin-left: 8px !important;
        }
      }

      @media (min-width: 768px) {
        .ranges {
          border-right: 1px solid rgba(221, 221, 221, 0.4) !important;
        }

        .ranges ul {
          width: 140px !important;
        }
      }

      position: relative;
      width: 100%;
      height: 100%;

      .form-control {
        height: 100%;
        display: flex;
        align-items: center;
        i {
          display: none;
        }
      }
    }
    .base-button {
      border-radius: 0px 4px 4px 0px;
      max-height: 100%;
    }
  }
  
}
</style>