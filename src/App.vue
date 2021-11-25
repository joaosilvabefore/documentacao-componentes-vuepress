
<template>
    <h1>Base Buttons</h1>
    <div class="components-list">
      <base-button>Default</base-button>
      <base-button variant="primary">Primary</base-button>
      <base-button variant="secondary">Secondary</base-button>
      <base-button variant="warning">Warning</base-button>
      <base-button variant="danger">Danger</base-button>
      <base-button variant="success">Success</base-button>
      <base-button disabled variant="danger">Disabled</base-button>
      <base-button rounded >Rounded</base-button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import BaseButton from './components/BaseButton/BaseButton.vue';
export default defineComponent({
  components: {
    BaseButton
  },

  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;500&display=swap');

* {
  font-family: 'Outfit', sans-serif;
}

h1 {
  text-align: center;
}

.components-list {
  max-width: 720px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 8px;
}
</style>
