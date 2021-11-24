### How to use it

For more informations on props, slots, etc. see [BootstrapVue Table Component](https://bootstrap-vue.org/docs/components/table)

_Medium table example_

```html
<template>
  <b-card title="My Table">
    <base-table :busy.sync="isBusy" :fields="fields" :items="fetchItems" primary-key="code" outlined>
      <template #cell(review_public_flag)="data">
        <b-form-checkbox :checked="data.item.review_public_flag" switch style="min-height: auto;"></b-form-checkbox>
      </template>
      <template #cell(user)="data">
        <div class="d-flex align-items-center">
          <avatar :src="data.value.profile_photo_url"></avatar>
          <span class="ml-3 -text-md font-weight-medium">{{ data.value.name | firstLastName }}</span>
        </div>
      </template>
      <template #cell(stars)="data">
        <rating id="review-value" class="p-0" :value="data.item.stars" readonly></rating>
      </template>
    </base-table>
  </b-card>
</template>

<script>
  export default {
    name: "TableExample",
    filters: {
      firstLastName(fullname) {
        const nameArr = fullname.split(" ");
        if (nameArr.length <= 2) {
          return fullname;
        } else {
          if (/(sr|sra)/gi.test(fullname)) {
            nameArr.splice(2, nameArr.length - 3);
          } else {
            nameArr.splice(1, nameArr.length - 2);
          }
          return nameArr.join(" ");
        }
      }
    },
    data() {
      return {
        fields: [
          { key: "review_public_flag", label: "Publicar", class: "review-column" },
          { key: "user", label: "Usuário", class: "user-column" },
          { key: "stars", label: "Estrelas", class: "stars-column" },
          { key: "review", label: "Avaliação" }
        ],
        isBusy: false,
        items: []
      };
    },
    methods: {
      async fetchItems() {
        try {
          const { data } = await this.$axios.$get(`/manager/courses/PAC2LQIK1/reviews`);
          this.items = data; // not required
          return data;
        } catch (error) {
          this.items = []; // not required
          return [];
        } finally {
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  /deep/ .review-column {
    width: 136px;
    max-width: 136px;
  }
  /deep/ .user-column {
    width: 256px;
    max-width: 256px;
  }
</style>
```

_Example: using a list group as mobile version of the table_

```html
<template>
  <b-card title="My Table">
    <base-table :busy.sync="isBusy" :fields="fields" :items="fetchItems" class="d-none d-md-block" primary-key="code" outlined>
      <template #cell(review_public_flag)="{ value: reviewPublicFlag }">
        <b-form-checkbox :checked="reviewPublicFlag" switch style="min-height: auto;"></b-form-checkbox>
      </template>
      <template #cell(user)="{ value: user }">
        <div class="d-flex align-items-center">
          <avatar :src="user.profile_photo_url"></avatar>
          <span class="ml-3 -text-md font-weight-medium">{{ user.name | firstLastName }}</span>
        </div>
      </template>
      <template #cell(stars)="{ value: stars }">
        <rating id="review-value" class="p-0" :value="stars" readonly></rating>
      </template>
    </base-table>

    <!-- Mobile version: already apply hides on screens greater than 768px -->
    <base-table-mobile :items="items" :fields="fields" primary-key="code">
      <template #list-item(user)="{ field, value: user }">
        <div class="d-flex align-items-center">
          <avatar :src="user.profile_photo_url" size="40px"></avatar>
          <span class="ml-3 -text-md font-weight-medium">{{ user.name }}</span>
        </div>
      </template>

      <template #list-item(stars)="{ value: stars }">
        <div>
          <rating id="review-value-mobile" class="p-0" :value="stars" readonly></rating>
        </div>
      </template>

      <template #list-item(review_public_flag)="{ field, value: reviewPublicFlag }">
        <b-form-checkbox :checked="reviewPublicFlag" switch class="float-right" style="min-height: auto;"></b-form-checkbox>
      </template>
    </base-table-mobile>
  </b-card>
</template>

<script>
  export default {
    name: "TableExample",
    filters: {
      firstLastName(fullname) {
        const nameArr = fullname.split(" ");
        if (nameArr.length <= 2) {
          return fullname;
        } else {
          if (/(sr|sra)/gi.test(fullname)) {
            nameArr.splice(2, nameArr.length - 3);
          } else {
            nameArr.splice(1, nameArr.length - 2);
          }
          return nameArr.join(" ");
        }
      }
    },
    data() {
      return {
        fields: [
          { key: "review_public_flag", label: "Publicar", class: "review-column" },
          { key: "user", label: "Usuário", class: "user-column" },
          { key: "stars", label: "Estrelas", class: "stars-column" },
          { key: "review", label: "Avaliação" }
        ],
        isBusy: false,
        items: []
      };
    },
    methods: {
      async fetchItems() {
        try {
          const { data } = await this.$axios.$get(`/manager/courses/PAC2LQIK1/reviews`);
          this.items = data; // not required when using items provider
          return data;
        } catch (error) {
          this.items = []; // not required when using items provider
          return [];
        } finally {
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  ::v-deep .review-column {
    @include media-breakpoint-up(lg) {
      width: 136px;
      max-width: 136px;
    }
  }
  ::v-deep .user-column {
    @include media-breakpoint-up(lg) {
      width: 256px;
      max-width: 256px;
    }
  }
  ::v-deep .list-item-content {
    &:first-child {
      order: 1;
      margin-top: 22px;
      margin-bottom: 0 !important;
    }
  }
</style>
```
