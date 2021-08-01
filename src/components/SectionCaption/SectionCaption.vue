<template>
  <h3 class="section-caption"><slot></slot></h3>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"

@Options({})
export default class Caption extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.section-caption {
  text-align: center;
  font-size: 2.14em;
  line-height: 1.13em;
  font-weight: 800;
  color: $main-color;
}
</style>
