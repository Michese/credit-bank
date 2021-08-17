<template>
  <div class="modal-button">
    <button class="button" type="button" @click.prevent="onOpen">
      <slot></slot>
    </button>
    <teleport to="body">
      <transition name="modal">
        <section v-if="isOpen" v-bodyoverflow class="modal d-flex justify-center align-center p-fixed">
          <transition name="fade-in" mode="out-in">
            <div v-if="!isDone" class="modal__inner w-100">
              <form class="d-flex flex-column align-center w-100 h-100" action="#" method="POST">
                <header class="d-block p-rel w-100 mb-50 text-center">
                  <h3 class="modal-caption text-center">Заявка на карту</h3>
                  <button type="button" class="modal__btn-close btn-close p-abs" @click.stop="onClose"></button>
                </header>
                <main class="d-flex flex-column align-start w-100">
                  <Input
                    v-for="(input, index) in getInputs"
                    :key="input.name + index"
                    class="mb-20"
                    :input="input"
                    :value="inputValues[index]"
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
              <div class="success-icon"></div>
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
import { Prop } from 'vue-property-decorator';
import Input from '@/components/Input/Input.vue';
import Dropdown from '@/components/Dropdown/Dropdown.vue';
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import { TDropdown, TOption } from '@/types/Dropdown';
import { TInput } from '@/types/Input';
import { TCheckbox } from '@/types/Checkbox';
import findBy from '@/utils/findBy';

const inputs: TInput[] = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'ФИО',
    pattern: /^[a-zа-яА-ЯёЁ]{2,}\s[a-zа-яА-ЯёЁ]{2,}\s[a-zа-яА-ЯёЁ]{2,}$/i,
    defaultValue: '',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Электронный адрес',
    pattern: /^[a-z]+.+@[a-z]{2,}.[a-z]{2,}$/i,
    defaultValue: '',
  },
  {
    type: 'tel',
    name: 'phone',
    placeholder: 'Номер телефона',
    pattern: /^\d{11}$/i,
    defaultValue: '',
  },
];

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
  inputValues = inputs.map(({ defaultValue }: TInput) => defaultValue);

  dropdown: TDropdown = {
    selectedIndex: 0,
    options: [{ text: 'Российская федерация' }, { text: 'Белорусь' }, { text: 'Украина' }, { text: 'Казахстан' }],
  };
  checkbox: TCheckbox = {
    id: 'approval',
    name: 'approval',
    checked: false,
  };
  get submitDisabled(): boolean {
    return !this.formIsValid();
  }
  get getInputs(): TInput[] {
    return inputs;
  }
  created(): void {
    this.dropdown.options.forEach((option: TOption, index: number) => (option.index = index));
  }
  formIsValid(): boolean {
    const inputsIsValid = inputs.reduce((total: boolean, input: TInput, index: number) => {
      return total && input.pattern.test(this.inputValues[index]);
    }, true);
    return this.checkbox.checked && inputsIsValid && !this.isLoading;
  }
  onInput(index: number, newValue: string): void {
    this.inputValues[index] = newValue;
  }
  onChangeToggle(): void {
    this.checkbox.checked = !this.checkbox.checked;
  }
  onChangeDropdown(newValue: number): void {
    this.dropdown.selectedIndex = newValue;
  }
  onSubmit(): void {
    if (this.formIsValid()) {
      const data = {
        card: 'creditCard',
        name: this.inputValues[inputs.findIndex(findBy('name', 'name'))],
        email: this.inputValues[inputs.findIndex(findBy('name', 'email'))],
        phone: this.inputValues[inputs.findIndex(findBy('name', 'phone'))],
        citizenship: this.citizenship,
        approval: true,
      };
      this.checkbox.checked = false;
      this.isLoading = true;
      setTimeout(() => {
        this.clearForm();
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
  clearForm(): void {
    this.inputValues = inputs.map(({ defaultValue }: TInput) => defaultValue);
    this.dropdown.selectedIndex = 0;
    this.checkbox.checked = false;
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables/media';

.modal {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: #000000;

  &__btn-close {
    top: calc(50% - 2.1428em);
    right: 0;
  }
  &__inner {
    font-size: 10px;
    max-width: calc(700px + 5em);
    max-height: 100vh;
    overflow-y: auto;
    padding: 10px calc(5em + 10px) calc(4em + 10px) 10px;
  }
}

@media screen and (min-width: $sm) {
  .modal__inner {
    font-size: 14px;
  }
}
</style>
