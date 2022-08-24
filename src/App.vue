<template>
  <Generator></Generator>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Generator from "./components/Generator.vue";
import { onMounted } from "vue";

@Options({
  components: {
    Generator,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
