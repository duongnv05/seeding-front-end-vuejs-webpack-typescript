<template>
  <div class="__hello_typescript__">
    <h1 class="text">Hello Typescript {{hello}}</h1>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-property-decorator'
  import Component from 'vue-class-component'

  @Component
  export default class HelloTypescript extends Vue {
    hello = 'abc'
    mounted() {
      console.log('Created HelloType')
    }
  }
</script>

<style lang="scss">
  .__hello_typescript__ {
    .text {
      color: red;
    }
  }
</style>