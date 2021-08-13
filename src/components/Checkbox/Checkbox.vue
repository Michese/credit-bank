<template>
  <label class="checkbox__wrapper d-flex align-center flex-wrap c-pointer" :for="checkbox.id">
    <div class="checkbox__inner d-block p-rel rounded mb-5" :class="{ checked: checkbox.checked }">
      <input class="d-none" type="checkbox" :id="checkbox.id" :name="checkbox.name" />
    </div>

    <p class="check-label"><slot></slot></p>
  </label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { TCheckbox } from '@/types/Checkbox';

@Options({
  name: 'Checkbox',
})
export default class Checkbox extends Vue {
  @Prop({
    require: true,
  })
  private checkbox!: TCheckbox;
}
</script>

<style lang="scss">
.checkbox {
  &__inner {
    width: 2.7857em;
    height: 2.7857em;
    margin-right: 1.428em;
    background-color: var(--bg-element-active-color);
    transition: box-shadow 0.1s ease-in;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      top: calc(50% - 0.65em);
      left: calc(50% - 0.6964em);
      border-left: 0 solid var(--white-color);
      border-bottom: 0 solid var(--white-color);
      transform: rotate(-45deg);
      transition-duration: 0.3s;
      transition-timing-function: ease-in;
      transition-property: border, height, width;
    }

    &.checked::after {
      width: 1.3928em;
      height: 0.857em;
      border-left-width: 0.2142em;
      border-bottom-width: 0.2142em;
    }
  }

  &__wrapper:hover &__inner {
    box-shadow: inset 0 0 0.5em var(--white-color), 0 0 0.5em var(--white-color);
  }
}
</style>
