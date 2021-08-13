<template>
  <button
    type="button"
    class="dropdown p-rel w-100 b-transparent rounded outline-none text-left c-pointer"
    :class="dropdownClasses"
    @click="toggleList"
  >
    <span class="dropdown__label p-abs crephusa gray-color"><slot></slot></span>
    <span class="input-text white-color">
      {{ dropdown.options[dropdown.selectedIndex].text }}
    </span>

    <transition name="dropdown-list w-100">
      <div v-show="isOpen" class="dropdown__inner p-abs w-100 rounded">
        <transition-group class="dropdown__list overflow-x-hidden" name="dropdown-items" tag="ul">
          <li v-for="option in getOptions" :key="option.index">
            <button
              class="dropdown__btn w-100 transparent b-none rounded text-left input-text white-color c-pointer"
              type="button"
              @click.stop="updatedDropdown(option.index)"
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
import { Options, Vue } from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import { TDropdown, TOption } from '@/types/Dropdown';

@Options({
  name: 'Dropdown',
})
export default class Dropdown extends Vue {
  @Prop({
    require: true,
  })
  private dropdown!: TDropdown;
  isOpen = false;
  @Emit() updatedDropdown(index: number): number {
    return index;
  }
  get dropdownClasses(): { 'is-opened': boolean } {
    return {
      'is-opened': this.isOpen,
    };
  }
  get getOptions(): TOption[] {
    return this.dropdown.options.filter((option: TOption) => {
      return option.index !== this.dropdown.selectedIndex;
    });
  }
  toggleList(): void {
    this.isOpen = !this.isOpen;
  }
}
</script>

<style lang="scss">
.dropdown {
  --animation-duration: 0.4s;

  padding: 2.802em 4.785em 1.3402em 2.1em;
  border-style: solid;
  border-width: 0;
  box-sizing: border-box;
  background-color: var(--bg-element-color);
  transition: background-color var(--animation-duration) ease-in-out;

  &:hover,
  &.is-opened {
    background-color: var(--darkGray-color);

    &::after {
      transform: rotateX(180deg) rotate(-45deg);
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1em;
    height: 1em;
    position: absolute;
    top: calc(50% - 0.5em);
    right: 2.214em;
    border-left: 0.214em solid var(--lightGray-color);
    border-bottom: 0.214em solid var(--lightGray-color);
    transform: rotateX(0) rotate(-45deg);
    transition: transform var(--animation-duration) linear;
  }

  &__btn {
    padding: 0.709em 0.75em;

    &:hover {
      background-color: var(--gray-color);
    }

    &:active {
      box-shadow: inset 0 0 3em var(--bg-element-color);
    }
  }

  &__label {
    left: 2.143em;
    top: calc(50% - 1.784em);
    user-select: none;
  }

  &__inner {
    padding: 1.071em 1.071em 1.428em;
    top: calc(100% + 0.357em);
    left: 0;
    z-index: 1;
    background-color: var(--darkGray-color);
  }

  &__list {
    max-height: 11em;
  }

  &-list-enter-active,
  &-list-leave-active {
    transition-duration: var(--animation-duration);
    transition-timing-function: ease;
    transition-property: transform, opacity;
  }

  &-list-enter-from,
  &-list-leave-to {
    opacity: 0;
    transform: translateY(2em);
  }

  &-items-enter-active,
  &-items-leave-active {
    transition-duration: 1s;
    transition-timing-function: ease;
    transition-property: transform, opacity, height;
  }

  &-items-enter-from {
    height: 0;
    opacity: 0;
    transform: translateX(-3.5714285em);
  }

  &-items-leave-to {
    height: 0;
    opacity: 0;
    transform: translateX(3.5714285em);
  }
}
</style>
