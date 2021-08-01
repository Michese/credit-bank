<template>
  <button
    type="button"
    class="dropdown"
    :class="dropdownClasses"
    @click="toggleList"
  >
    <span class="dropdown__label"><slot></slot></span>
    <span class="dropdown__value">
      {{ dropdown.getSelectedOption().text }}
    </span>

    <transition name="dropdown-list">
      <div v-show="dropdown.isOpen" class="dropdown__inner">
        <transition-group class="dropdown__list" name="dropdown-items" tag="ul">
          <li v-for="option in dropdown.getOptions()" :key="option.index">
            <button
              class="dropdown__btn"
              type="button"
              :data-value="option.index"
              @click.stop="$emit('change', +$event.target.dataset.value)"
            >
              {{ option.text }}
            </button>
          </li>
        </transition-group>
      </div>
    </transition>
  </button>
</template>

<script lang="ts">
import DropdownClass from "@/components/Dropdown/interface/Dropdown"
import { Options, Vue } from "vue-class-component"

@Options({
  props: {
    dropdown: DropdownClass
  },
  emits: ["change"],
  computed: {
    dropdownClasses() {
      return {
        "is-opened": this.dropdown.isOpen
      }
    }
  },
  methods: {
    toggleList() {
      this.dropdown.toggle()
    }
  }
})
export default class Dropdown extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

$animation-duration: 0.4s;

.dropdown {
  position: relative;
  width: 100%;
  padding: 2.802em 4.785em 1.3402em 2.1em;
  border-radius: 10px;
  border-style: solid;
  border-width: 0em;
  border-color: transparent;
  box-sizing: border-box;
  outline: none;
  background-color: $bg-element-color;
  text-align: left;
  color: $main-color;
  cursor: pointer;
  transition: background-color $animation-duration ease-in-out;
}

.dropdown:hover,
.dropdown.is-opened {
  background-color: $bg-dropwawn-active-color;
}

.dropdown::after {
  content: "";
  display: block;
  width: 1em;
  height: 1em;
  position: absolute;
  top: calc(50% - 0.5em);
  right: 2.214em;
  border-left: 0.214em solid $fourth-color;
  border-bottom: 0.214em solid $fourth-color;
  transform: rotateX(0) rotate(-45deg);
  transition: transform $animation-duration linear;
}

.dropdown.is-opened::after {
  transform: rotateX(180deg) rotate(-45deg);
}

.dropdown__value,
.dropdown__btn {
  font-size: 1.428em;
  line-height: 113.22%;
  color: $main-color;
}

.dropdown__label {
  position: absolute;
  left: 2.143em;
  top: calc(50% - 1.784em);
  font-size: 1em;
  line-height: 113.22%;
  color: $secondary-color;
  user-select: none;
}

.dropdown__inner {
  width: 100%;
  padding: 1.071em 1.071em 1.428em;
  position: absolute;
  top: calc(100% + 0.357em);
  left: 0;
  z-index: 1;
  border-radius: 10px;
  background-color: $bg-dropwawn-active-color;
}

.dropdown__list {
  max-height: 11em;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.dropdown-list-enter-active,
.dropdown-list-leave-active {
  transition-duration: $animation-duration;
  transition-timing-function: ease;
  transition-property: transform, opacity;
}
.dropdown-list-enter-from,
.dropdown-list-leave-to {
  opacity: 0;
  transform: translateY(2em);
}

.dropdown-items-enter-active,
.dropdown-items-leave-active {
  transition-duration: 1s;
  transition-timing-function: ease;
  transition-property: transform, opacity, height;
}

.dropdown-items-enter-from {
  height: 0;
  opacity: 0;
  transform: translateX(-50px);
}

.dropdown-items-leave-to {
  height: 0;
  opacity: 0;
  transform: translateX(50px);
}

.dropdown__btn {
  width: 100%;
  padding: 0.709em 0.75em;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
}

.dropdown__btn:hover {
  background-color: $secondary-color;
}

.dropdown__btn:active {
  box-shadow: inset 0 0 3em $bg-element-color;
}
</style>
