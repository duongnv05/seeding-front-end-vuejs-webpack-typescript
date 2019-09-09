<template>
  <div id="app">
    <router-view></router-view>
    <h1>App</h1>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  
  @Component
  export default class App extends Vue {
    created() {
      console.log('dsfsafasdfsadf')
    }
  }
</script>