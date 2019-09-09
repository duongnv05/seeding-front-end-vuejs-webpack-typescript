<template>
  <div class="__home__">
    <div class="wrapper">
      <h1 @click="onShow()">home page said: {{hello}}</h1>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Home extends Vue {
    hello: string = 'allalalal';

    onShow() {
      console.log(this.hello)
    }
  }
</script>

<style lang="scss">
  .__home__ {
    .wrapper {
      background-color: pink;
    }
  }
</style>