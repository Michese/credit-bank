<template>
  <div class="modal-button">
    <button class="button" type="button" @click.prevent="onOpen">
      <slot></slot>
    </button>
    <teleport to="body">
      <transition name="modal">
        <section
          v-if="isOpen"
          class="modal d-flex justify-center align-center p-fixed"
          @click.stop
          @wheel.stop.self.passive.prevent.capture.once
          @scroll.stop.self.passive.prevent.capture.once
        >
          <transition name="modal-inner" mode="out-in">
            <div v-if="!isDone" class="modal__inner w-100" @click.stop>
              <form class="d-flex flex-column align-center w-100 h-100" action="#" method="POST">
                <header class="d-block p-rel w-100 mb-50 text-center">
                  <h3 class="modal-caption text-center">Заявка на карту</h3>
                  <button
                    type="button"
                    class="modal__btn-close p-0 p-abs transparent b-none outline-none c-pointer"
                    @click.stop="onClose"
                  ></button>
                </header>
                <main class="d-flex flex-column align-start w-100">
                  <Input
                    v-for="(input, index) in inputs"
                    :key="input.name + index"
                    class="mb-20"
                    :input="input"
                    :value="input.value"
                    @updated-input="onInput(index, $event)"
                  >
                    {{ input.placeholder }}
                  </Input>
                  <dropdown class="mb-20" :dropdown="dropdown" @updated-dropdown="onChangeDropdown($event)">
                    Гражданство
                  </dropdown>
                  <checkbox class="mb-30" :checkbox="checkbox" @change="onChangeToggle">
                    Я соглашаюсь на
                    <span class="white-color"> обработку </span> моих персональных данных
                  </checkbox>
                  <button class="button" type="submit" @click.prevent="onSubmit" :disabled="submitDisabled">
                    Заказать сейчас
                  </button>
                </main>
              </form>
            </div>
            <div v-else class="d-flex flex-column justify-center align-center w-100 h-100" @click.stop="onClose">
              <div class="modal__success-icon"></div>
              <h3 class="modal-caption mb-10 text-center">Ваша заявка принята</h3>
              <p class="menippe text-center">В ближайшее время с вами свяжется наш менеджер</p>
            </div>
          </transition>
        </section>
      </transition>
    </teleport>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import Input from '@/components/Input/Input.vue';
import Dropdown from '@/components/Dropdown/Dropdown.vue';
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import { TDropdown, TOption } from '@/types/Dropdown';
import { TInput } from '@/types/Input';
import { TCheckbox } from '@/types/Checkbox';
import { isValid as inputIsValid } from '@/utils/Input';
import findBy from '@/utils/findBy';

@Options({
  name: 'ModalButton',
  components: {
    Input,
    Dropdown,
    Checkbox,
  },
})
export default class ModalButton extends Vue {
  @Prop({
    require: true,
  })
  private citizenship!: string;
  isOpen = false;
  isDone = false;
  isLoading = false;
  inputs: TInput[] = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'ФИО',
      pattern: /^[a-zа-яА-ЯёЁ]{2,}\s[a-zа-яА-ЯёЁ]{2,}\s[a-zа-яА-ЯёЁ]{2,}$/i,
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Электронный адрес',
      pattern: /^[a-z]+.+@[a-z]{2,}.[a-z]{2,}$/i,
    },
    {
      type: 'tel',
      name: 'phone',
      placeholder: 'Номер телефона',
      pattern: /^\d{11}$/i,
    },
  ];

  dropdown: TDropdown = {
    selectedIndex: 0,
    options: [{ text: 'Российская федерация' }, { text: 'Белорусь' }, { text: 'Украина' }, { text: 'Казахстан' }],
  };
  checkbox: TCheckbox = {
    id: 'approval',
    name: 'approval',
    checked: false,
  };
  @Watch('isOpen') wIsOpen(): void {
    const body = document.querySelector('body');
    if (this.isOpen && body) {
      body.style.overflowY = 'hidden';
    } else if (body) {
      body.style.overflowY = 'auto';
    }
  }
  get submitDisabled(): boolean {
    return !this.formIsValid();
  }
  created(): void {
    this.dropdown.options.forEach((option: TOption, index: number) => (option.index = index));
    this.inputs.forEach((input: TInput) => (input.value = ''));
  }
  formIsValid(): boolean {
    const inputsIsValid = this.inputs.reduce((total: boolean, input: TInput) => {
      return total && inputIsValid(input);
    }, true);
    return this.checkbox.checked && inputsIsValid && !this.isLoading;
  }
  onInput(index: number, newValue: string): void {
    this.inputs[index].value = newValue;
  }
  onChangeToggle(): void {
    this.checkbox.checked = !this.checkbox.checked;
  }
  onChangeDropdown(newValue: number): void {
    this.dropdown.selectedIndex = newValue;
  }
  onSubmit(): void {
    if (this.formIsValid()) {
      this.checkbox.checked = false;
      this.isLoading = true;
      setTimeout(() => {
        const data = {
          card: 'creditCard',
          name: this.inputs.find(findBy('name', 'name'))?.value,
          email: this.inputs.find(findBy('name', 'email'))?.value,
          phone: this.inputs.find(findBy('name', 'phone'))?.value,
          citizenship: this.citizenship,
          approval: true,
        };
        console.log(data);
        this.isLoading = false;
        this.isDone = true;
      }, 1000);
    }
  }
  onOpen(): void {
    this.isOpen = true;
  }
  onClose(): void {
    this.isDone = false;
    this.isOpen = false;
  }
}
</script>

<style lang="scss">
@import 'src/styles/variables/media';

.modal {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: #000000;

  &__inner {
    font-size: 10px;
    max-width: calc(700px + 5em);
    max-height: 100vh;
    overflow-y: auto;
    padding: 10px calc(5em + 10px) calc(4em + 10px) 10px;
  }

  &__btn-close {
    width: 4.2857em;
    height: 4.2857em;
    top: calc(50% - 2.1428em);
    right: 0;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }

    &::before,
    &::after {
      --height: 40%;

      content: '';
      display: block;
      height: var(--height);
      position: absolute;
      top: calc((100% - var(--height)) / 2);
      left: calc(50% - 0.1em);
      border-left: 0.2em solid var(--gray-color);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }

    &:hover::before,
    &:hover::after {
      border-left-color: var(--peru-color);
      box-shadow: 0 0 1em var(--peru-color);
    }
  }

  &__success-icon {
    width: 2.285em;
    height: 1.428em;
    margin-bottom: 1.357em;
    border-left: 0.428em solid var(--success-color);
    border-bottom: 0.428em solid var(--success-color);
    transform: rotate(-45deg);
  }

  &-enter-active,
  &-leave-active {
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
    transition-property: transform, opacity;
  }

  &-enter-from {
    opacity: 0;
    transform: translateY(-50%);
  }

  &-leave-to {
    opacity: 0;
    transform: translateY(50%);
  }

  &-inner {
    &-enter-active,
    &-leave-active {
      transition-duration: 1s;
      transition-timing-function: linear;
      transition-property: opacity;
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
    }
  }
}

@media screen and (min-width: $sm) {
  .modal__inner {
    font-size: 14px;
  }
}
</style>
