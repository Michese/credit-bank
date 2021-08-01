<template>
  <div class="modal-button">
    <Button type="button" @click.prevent="onOpen"><slot></slot></Button>

    <teleport to="body">
      <transition name="modal">
        <section v-if="isOpen" class="modal" @click.stop>
          <transition name="modal-inner" mode="out-in">
            <div v-if="!done" class="modal__inner" @click.stop>
              <form class="modal__form" action="#" method="POST">
                <header class="modal__heading">
                  <section-caption>Заявка на карту</section-caption>
                  <button
                    type="button"
                    class="modal__btn-close"
                    @click.stop="onClose"
                  ></button>
                </header>
                <main class="modal__main">
                  <Input
                    v-for="(input, index) in inputs"
                    :key="index"
                    class="modal__input"
                    :input="input"
                    @updated="onInput(index, $event)"
                  >
                    {{ input.placeholder }}
                  </Input>
                  <dropdown
                    class="modal__dropdown"
                    :dropdown="dropdown"
                    @change="onChangeDropdown($event)"
                  >
                    Гражданство
                  </dropdown>
                  <checkbox
                    class="modal__checkbox"
                    :checkbox="checkbox"
                    @change="onChangeToggle"
                  >
                    Я соглашаюсь на
                    <span class="main-color"> обработку </span> моих
                    персональных данных
                  </checkbox>
                  <Button
                    type="submit"
                    @click.prevent="onSubmit"
                    :disabled="submitDisabled"
                  >
                    Заказать сейчас
                  </Button>
                </main>
              </form>
            </div>
            <div v-else class="modal__done-block" @click.stop="onClose">
              <div class="modal__done-icon"></div>
              <section-caption class="modal__done-caption">
                Ваша заявка принята
              </section-caption>
              <p class="modal__done-text">
                В ближайшее время с вами свяжется наш менеджер
              </p>
            </div>
          </transition>
        </section>
      </transition>
    </teleport>
  </div>
</template>

<script lang="ts">
import IInput from "@/components/Input/interface/IInput"
import InputClass from "@/components/Input/interface/Input"
import DropdownClass from "@/components/Dropdown/interface/Dropdown"
import OptionClass from "@/components/Dropdown/interface/Option"
import CheckboxClass from "@/components/Checkbox/inteface/Checkbox"
import { Options, Vue } from "vue-class-component"
import SectionCaption from "@/components/SectionCaption/SectionCaption.vue"
import Input from "@/components/Input/Input.vue"
import Dropdown from "@/components/Dropdown/Dropdown.vue"
import Checkbox from "@/components/Checkbox/Checkbox.vue"
import Button from "@/components/Button/Button.vue"

@Options({
  components: {
    SectionCaption,
    Input,
    Dropdown,
    Checkbox,
    Button
  },
  data: () => ({
    isOpen: false,
    done: false,
    inputs: [
      new InputClass("text", "name", "ФИО", /^[a-zа-яА-ЯёЁ\s]{4,}$/i),
      new InputClass(
        "email",
        "email",
        "Электронный адрес",
        /^[a-z]+.{1,}@[a-z]{2,}.[a-z]{2,}$/i
      ),
      new InputClass("tel", "phone", "Номер телефона", /^\d{11}$/i)
    ],
    dropdown: new DropdownClass([
      new OptionClass("Российская федерация"),
      new OptionClass("Белорусь"),
      new OptionClass("Украина"),
      new OptionClass("Казахстан")
    ]),
    checkbox: new CheckboxClass("approval", "approval", false)
  }),
  computed: {
    submitDisabled(): boolean {
      return !this.formIsValid()
    }
  },
  methods: {
    formIsValid(): boolean {
      const inputsIsValid = this.inputs.reduce(
        (total: boolean, input: IInput) => {
          return total && input.isValid()
        },
        true
      )
      return this.checkbox.checked && inputsIsValid
    },
    onInput(index: number, newValue: string): void {
      this.inputs[index].value = newValue
    },
    onChangeToggle(): void {
      this.checkbox.toggle()
    },
    onChangeDropdown(newValue: number): void {
      this.dropdown.setSelected(newValue)
    },
    onSubmit(): void {
      if (this.formIsValid()) {
        this.checkbox.uncheck()
        this.done = true
      }
    },
    onOpen(): void {
      this.isOpen = true
    },
    onClose(): void {
      this.done = false
      this.isOpen = false
    }
  }
})
export default class ModalButton extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: #000000;
}

.modal-enter-active,
.modal-leave-active {
  transition-duration: 0.6s;
  transition-timing-function: ease-in-out;
  transition-property: transform, opacity;
}

.modal-enter-from {
  opacity: 0;
  transform: translateY(-50%);
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(50%);
}

.modal-inner-enter-active,
.modal-inner-leave-active {
  transition-duration: 1s;
  transition-timing-function: linear;
  transition-property: opacity;
}

.modal-inner-enter-from,
.modal-inner-leave-to {
  opacity: 0;
}

.modal__inner {
  max-width: calc(700px + 5em);
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  padding: 10px calc(5em + 10px) calc(4em + 10px) 10px;
}

.modal__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 100vh;
}

.modal__heading {
  display: block;
  text-align: center;
  position: relative;
  width: 100%;
  margin-bottom: 50px;
}

.modal__btn-close {
  width: 4.2857em;
  height: 4.2857em;
  padding: 0;
  position: absolute;
  right: 0;
  top: calc(50% - 2.1428em);
  color: $secondary-color;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.modal__btn-close:hover {
  transform: scale(1.2);
}

.modal__btn-close::before,
.modal__btn-close::after {
  $height: 40%;
  content: "";
  display: block;
  height: $height;
  position: absolute;
  top: (100% - $height) / 2;
  left: calc(50% - 0.1em);
  border-left: 0.2em solid $secondary-color;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.modal__btn-close::before {
  transform: rotate(45deg);
}

.modal__btn-close::after {
  transform: rotate(-45deg);
}

.modal__btn-close:hover::before,
.modal__btn-close:hover::after {
  border-left-color: $third-color;
  box-shadow: 0 0 1em $third-color;
}

.modal__main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.modal__input,
.modal__dropdown {
  margin-bottom: 20px;
}

.modal__checkbox {
  margin-bottom: 30px;
}

.main-color {
  color: $main-color;
}

.modal__done-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.modal__done-caption {
  margin-bottom: 0.333em;
}

.modal__done-icon {
  content: "";
  display: block;
  align-self: center;
  width: 2.285em;
  height: 1.428em;
  margin-bottom: 1.357em;
  border-left: 0.428em solid $success-color;
  border-bottom: 0.428em solid $success-color;
  transform: rotate(-45deg);
}

.modal__done-text {
  line-height: 1.43em;
  text-align: center;
  color: $secondary-color;
}
</style>
