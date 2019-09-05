<template>
  <div class="__home__">
    <div class="wrapper">
      <h1>home page said: {{hello}}</h1>
    </div>
  </div>
</template>

<script class="ts">
  import { Component, Vue, Data } from 'vue-property-decorator'

  @Component
  export default class Home extends Vue {

    hello = 'data haa';
  }
</script>

<style lang="scss">
  .__home__ {
    .wrapper {
      background-color: pink;
    }
  }
</style>