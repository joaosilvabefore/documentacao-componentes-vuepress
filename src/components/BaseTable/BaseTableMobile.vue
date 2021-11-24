<template>
  <b-list-group :class="listClass">
    <b-list-group-item v-if="busy">
      <loading class="py-5" show></loading>
    </b-list-group-item>

    <template v-else>
      <b-list-group-item v-if="title || $slots.header" class="py-3">
        <slot name="header">{{ title }}</slot>
      </b-list-group-item>

      <template v-if="items.length">
        <b-list-group-item
          v-for="(item, idx) in items"
          :key="`_row_${item[primaryKey || idx]}_mobile`"
          class="d-flex flex-column -p-18"
        >
          <div
            v-for="field in fields"
            :key="`_row_${item[primaryKey || idx]}_cell_${field.key || field}_mobile`"
            :class="field.class || ''"
            class="list-item-content text-tertiary"
          >
            <h3 class="list-item-title d-inline-block">{{ isObject(field) ? field.label : field }}</h3>
            <slot
              :name="`list-item(${field.key || field})`"
              v-bind="{
                item,
                unformatted: item[field.key || field],
                value: field.formatter ? field.formatter(item[field.key || field]) : item[field.key || field],
                field
              }"
            >
              <span class="list-item-text d-block">{{ item[field.key || field] }}</span>
            </slot>
          </div>
        </b-list-group-item>
      </template>

      <b-list-group-item v-else class="d-flex flex-column">
        <slot name="list-empty">
          <span class="-py-18 -px-16 list-item-content text-tertiary">{{ emptyText }}</span>
        </slot>
      </b-list-group-item>
    </template>
  </b-list-group>
</template>

<script>
import isObject from "lodash.isobject";

export default {
  name: "BaseTableMobile",
  props: {
    listClass: {
      type: [String, Object, Array],
      default: () => ""
    },
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    fields: {
      type: Array,
      required: true
    },
    primaryKey: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    busy: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: "Não foram encontrados registros."
    }
  },
  methods: {
    isObject
  }
};
</script>

<style lang="scss" scoped>
.list-group {
  display: flex;
  @include media-breakpoint-up(md) {
    display: none;
  }
}
.list-group-item {
  &:first-child {
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }
  &:last-child {
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    border-bottom-width: $table-border-width;
  }
}
.list-item-content {
  &:not(:last-child) {
    margin-bottom: 22px;
  }
}
.list-item-title {
  margin-bottom: 12px;
  font-size: $font-size-sm;
  font-weight: 600;
  line-height: 21px;
  color: $tertiary;
  text-transform: uppercase;
}
</style>
