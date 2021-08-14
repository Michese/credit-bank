<template>
  <div class="w-100">
    <div class="input p-rel" :class="inputClasses">
      <input
        class="input__body p-rel w-100 rounded b-transparent input-text white-color"
        :class="inputBodyClasses"
        :type="input.type"
        :name="input.name"
        :id="renderId"
        :value="getDisplay"
        @input="onInput"
      />
      <label class="input__placeholder p-abs input-text" :for="renderId"><slot></slot></label>
    </div>
    <transition name="input-alert">
      <span v-show="showAlert" class="input__alert d-iblock alert-text"> Некорректно введены данные </span>
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop, Emit, Watch } from 'vue-property-decorator';
import { TInput } from '@/types/Input';
import { isValid } from '@/utils/Input';

@Options({
  name: 'Input',
})
export default class Input extends Vue {
  @Prop({
    require: true,
  })
  private input!: TInput;
  @Prop({
    require: true,
  })
  private value!: string;
  display = this.value;
  isActivated = (this.value ?? '') !== '';
  @Emit() updatedInput(value: string): string {
    if (!this.isActivated && !!value) {
      this.isActivated = true;
    }
    return value;
  }
  @Watch('value') wValue(newValue: string): void {
    this.display = newValue;
  }

  @Watch('display') wDisplay(newValue: string): void {
    if (this.value !== newValue) {
      this.display = this.value;
    }
  }

  onInput(e: { isTrusted: boolean; target: { value: string } }): void {
    this.refresh(e.target.value);
  }
  phoneReplacer(str: string, p1: string, p2: string, p3: string, p4: string, p5: string): string {
    let result = p1 ? '+7' : '';
    result += p2 ? ` ${p2}` : '';
    result += p3 ? ` ${p3}` : '';
    result += p4 ? ` ${p4}` : '';
    result += p5 ? ` ${p5}` : '';
    return result;
  }

  refresh(value: string): void {
    this.display = value;
    if (this.input.type === 'tel') {
      value = value
        .replaceAll(/^\+7/g, '8')
        .replaceAll(/^[^8]+/g, '8$&')
        .replaceAll(/[^0-9]+/gi, '');
      if (value.length > 11) {
        return;
      }
    }
    this.updatedInput(value);
  }

  get getDisplay(): string {
    let newDisplay = this.display;
    if (this.input.type === 'tel') {
      newDisplay = this.display.replace(/(^8+)([0-9]{0,3})([0-9]{0,3})([0-9]{0,2})([0-9]{0,2})/gi, this.phoneReplacer);
    }
    return newDisplay;
  }
  get renderId(): string {
    return `id-${this.input.type}-${this.input.name}`;
  }
  get inputClasses(): { input__valid: boolean; input__invalid: boolean } {
    const inputIsValid = isValid(this.input);
    return {
      input__valid: this.isActivated && inputIsValid,
      input__invalid: this.isActivated && !inputIsValid,
    };
  }
  get inputBodyClasses(): { 'to-up': boolean } {
    return {
      'to-up': !!this.value,
    };
  }
  get showAlert(): boolean {
    return this.isActivated && !isValid(this.input);
  }
}
</script>

<style lang="scss" scoped>
.input {
  --animation-duration: 0.3s;

  &::before {
    border-left-width: 0.2142em;
    border-left-style: solid;
  }

  &::after {
    border-bottom-width: 0.2142em;
    border-bottom-style: solid;
  }

  &__placeholder {
    left: 1.5em;
    top: calc(50% - 0.5em);
    user-select: none;
    transition-duration: var(--animation-duration);
    transition-timing-function: ease;
    transition-property: transform, font-size, left;
  }

  &__body {
    padding: 1.351em 1.451em;
    border-style: solid;
    border-width: 0.1em;
    outline: none;
    background-color: var(--bg-element-color);
    transition-duration: var(--animation-duration);
    transition-timing-function: ease;
    transition-property: padding, background-color, border-color;

    &:hover {
      background-color: var(--bg-element-active-color);
    }

    &:focus,
    &.to-up {
      padding-top: 1.851em;
      padding-bottom: 0.851em;
      background-color: var(--bg-element-active-color);

      & + .input__placeholder {
        font-size: 1em;
        left: 2.143em;
        transform: translateY(-1.284em);
      }
    }
  }

  &__alert {
    margin: 0.4166em 2.5em 0;
  }

  &-alert {
    &-enter-active,
    &-leave-activ {
      transition-duration: var(--animation-duration);
      transition-timing-function: ease-out;
      transition-property: opacity, transform;
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: translateX(-2.142857em);
    }
  }

  &::before,
  &::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    right: -3.571em;
    top: calc(50% - 1em);
    transition-duration: var(--animation-duration);
    transition-timing-function: ease;
    transition-property: border, transform, height, width;
  }

  &__valid {
    &::before,
    &::after {
      width: 1.3928em;
      height: 0.857em;
      transform: rotate(-45deg);
    }

    &::before {
      border-left-color: var(--success-color);
    }

    &::after {
      border-bottom-color: var(--success-color);
    }
  }

  &__invalid {
    & .input__body {
      border-color: var(--alert-color);
    }

    &::before {
      border-left-color: var(--alert-color);
      height: 1.616em;
      transform: translateX(-0.7009em) rotate(-45deg);
    }

    &::after {
      width: 1.616em;
      border-bottom-color: var(--alert-color);
      transform: translateY(0.7009em) rotate(-45deg);
    }
  }
}
</style>
