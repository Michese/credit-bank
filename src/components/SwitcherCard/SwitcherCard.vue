<template>
  <span class="switcher-card">
    <input
      class="switcher-card__body"
      type="radio"
      :name="card.name"
      :id="card.id"
      :checked="card.isCheck"
      @click.prevent
    />
    <label :for="card.id" class="switcher-card__label">
      {{ card.label }}
    </label>
  </span>
</template>

<script lang="ts">
import SwitcherCardClass from "@/components/SwitcherCard/interface/SwitcherCard"
import { Options, Vue } from "vue-class-component"

@Options({
  props: {
    card: {
      type: SwitcherCardClass,
      require: true
    }
  },
  emits: ['update:card.isCheck']
})
export default class SwitcherCard extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.switcher-card__label {
  font-size: 1.285em;
  line-height: 1.277em;
  font-weight: 700;
  color: $secondary-color;
  cursor: pointer;
}

.switcher-card__body {
  display: none;
}

.switcher-card__body:checked + .switcher-card__label {
  color: $third-color;
}

.switcher-card__body:hover + .switcher-card__label {
  text-shadow: 0 0 0.5em currentColor;
}
</style>
