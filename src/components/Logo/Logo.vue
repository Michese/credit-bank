<template>
  <a href="#" class="d-iblock outline-none">
    <img class="logo__image" src="./assets/logo.png" alt="logo" />
  </a>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Logo',
})
export default class Logo extends Vue {}
</script>
<style lang="scss" scoped>
.logo__image {
  min-height: var(--logo-height);
}
</style>
