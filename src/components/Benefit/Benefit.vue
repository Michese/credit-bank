<template>
  <div class="benefit">
    <strong class="benefit__caption"><slot name="caption"></slot></strong>
    <span class="benefit__text"><slot></slot></span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"

@Options({})
export default class Benefit extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.benefit {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.benefit__caption {
  font-weight: 700;
  font-size: 2.571em;
  line-height: 1.25em;
  color: $third-color;
}

.benefit__text {
  font-weight: 700;
  font-size: 1em;
  line-height: 1.43em;
  color: $secondary-color;
}
</style>
