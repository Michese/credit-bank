<template>
  <label class="checkbox__wrapper" :for="checkbox.id">
    <div class="checkbox__inner" :class="{ checked: checkbox.checked }">
      <input
        class="checkbox"
        type="checkbox"
        :id="checkbox.id"
        :name="checkbox.name"
        @change="$emit('change')"
      />
    </div>

    <p class="checkbox__text"><slot></slot></p>
  </label>
</template>

<script lang="ts">
import CheckboxClass from "@/components/Checkbox/inteface/Checkbox"
import { Options, Vue } from "vue-class-component"

@Options({
  props: {
    checkbox: {
      type: CheckboxClass,
      require: true
    }
  },
  emits: ["change"]
})
export default class Checkbox extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

$animation-duration: 0.3s;

.checkbox__wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
}

.checkbox__inner {
  display: inline-block;
  width: 2.7857em;
  height: 2.7857em;
  margin-right: 1.428em;
  position: relative;
  background-color: $bg-input-active-color;
  border-radius: 10px;
  transition: box-shadow 0.1s ease-in;
}

.checkbox__wrapper:hover .checkbox__inner {
  box-shadow: inset 0 0 0.5em $main-color, 0 0 0.5em $main-color;
}

.checkbox__inner::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  top: calc(50% - 0.65em);
  left: calc(50% - 0.6964em);
  border-left: 0 solid $main-color;
  border-bottom: 0 solid $main-color;
  transition: border $animation-duration ease,
    transform $animation-duration ease, height $animation-duration ease,
    width $animation-duration ease;
}

.checkbox__inner.checked::after {
  width: 1.3928em;
  height: 0.857em;
  transform: rotate(-45deg);
  border-left-width: 0.2142em;
  border-bottom-width: 0.2142em;
}

.checkbox {
  display: none;
}

.checkbox__text {
  font-size: 1em;
  line-height: 1.5em;
  color: $secondary-color;
}
</style>
