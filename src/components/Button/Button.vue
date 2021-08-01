<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"

@Options({})
export default class Button extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.button {
  display: block;
  margin: 0;
  padding: 24.5px 44px;
  background-color: $third-color;
  font-weight: 700;
  line-height: 113.22%;
  font-size: 1.71em;
  color: $main-color;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
}

.button:hover {
  background-color: $bg-btn-hover-color;
}

.button:active {
  background-color: $third-color;
}

.button:disabled {
  background-color: $bg-element-color;
  cursor: default;
}
</style>
