<template>
  <a href="#" class="logo">
    <img class="logo__image" src="./assets/logo.png" alt="logo" />
  </a>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"

@Options({})
export default class Logo extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.logo {
  display: inline-block;
}

.logo__image {
  min-height: $logo-height;
}
</style>
