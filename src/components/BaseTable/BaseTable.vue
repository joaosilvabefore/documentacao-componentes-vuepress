<template>
  <div :class="outerBaseTableClass" class="base-table">
    <b-table
      ref="table"
      :bordered="bordered"
      :outlined="outlined"
      :empty-text="emptyText"
      show-empty
      responsive
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template v-slot:table-busy>
        <loading :show="true">
          <div style="height: 60px;"></div>
        </loading>
      </template>

      <!-- Pass on all named slots -->
      <template v-for="slot in Object.keys($slots)" v-slot:[slot]>
        <slot :name="slot" />
      </template>

      <!-- Pass on all scoped slots -->
      <template v-for="slot in Object.keys($scopedSlots)" v-slot:[slot]="scope">
        <slot v-bind="scope" :name="slot" />
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "BaseTable",
  inheritAttrs: false,
  props: {
    outlined: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: "Não encontramos registros válidos"
    }
  },
  computed: {
    outerBaseTableClass() {
      return {
        "bordered-table": this.bordered || this.outlined
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.base-table.bordered-table {
  border: $table-border-width solid $table-border-color;
  border-radius: $border-radius;
}
.table-responsive {
  margin-bottom: 0;
}

/deep/ .table-hover {
  tbody {
    tr:hover {
      background-color: $egg-blue;
      * {
        color: white;
      }
    }
  }
}
</style>
