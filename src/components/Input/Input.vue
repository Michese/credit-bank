<template>
  <div class="input__wrapper">
    <div class="input" :class="inputClasses">
      <input
        class="input__body"
        :class="inputBodyClasses"
        :type="input.type"
        :name="input.name"
        :id="renderId"
        :value="input.value"
        @input="onInput"
      />
      <label class="input__placeholder" :for="renderId"><slot></slot></label>
    </div>
    <transition name="input-alert">
      <span v-show="showAlert" class="input__alert">
        Некорректно введены данные
      </span>
    </transition>
  </div>
</template>

<script lang="ts">
import IEventInput from "@/components/Input/interface/IEventInput"
import InputClass from "@/components/Input/interface/Input"
import { Options, Vue } from "vue-class-component"

@Options({
  props: {
    input: InputClass
  },
  emits: ["updated"],
  data: () => ({
    isActivated: false
  }),
  methods: {
    onInput(event: IEventInput) {
      const value = event.target.value

      if (!this.isActivated && value.length > 0) {
        this.isActivated = true
      }

      this.$emit("updated", value)
    }
  },
  computed: {
    renderId() {
      return `id-${this.input.type}-${this.input.name}`
    },
    inputClasses() {
      const inputIsValid = this.input.isValid()
      return {
        input__valid: this.isActivated && inputIsValid,
        input__invalid: this.isActivated && !inputIsValid
      }
    },
    inputBodyClasses() {
      return {
        "to-up": this.input.value.length > 0
      }
    },
    showAlert() {
      return this.isActivated && !this.input.isValid()
    }
  }
})
export default class Input extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
$animation-duration: 0.3s;

.input__wrapper {
  width: 100%;
}

.input {
  position: relative;
}

.input__placeholder,
.input__body {
  font-size: 1.428em;
  line-height: 113.22%;
}

.input__placeholder {
  position: absolute;
  left: 1.5em;
  top: calc(50% - 0.5em);
  color: $secondary-color;
  user-select: none;
  transition: transform $animation-duration ease,
    font-size $animation-duration ease, left $animation-duration ease;
}

.input__body {
  position: relative;
  width: 100%;
  padding: 1.351em 1.451em;
  border-radius: 10px;
  border-style: solid;
  border-width: 0.1em;
  border-color: transparent;
  outline: none;
  background-color: $bg-element-color;
  color: $main-color;
  transition: padding $animation-duration ease,
    background-color $animation-duration ease,
    border-color $animation-duration ease;
}

.input__alert {
  display: inline-block;
  margin: 0.4166em 2.5em 0;
  font-size: 0.857em;
  line-height: 113.22%;
  color: $alert-color;
}

.input-alert-enter-active,
.input-alert-leave-active {
  transition-duration: $animation-duration;
  transition-timing-function: ease-out;
  transition-property: opacity, transform;
}

.input-alert-enter-from,
.input-alert-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.input__body:hover {
  background-color: $bg-input-active-color;
}

.input__body:focus,
.input__body.to-up {
  padding-top: 1.851em;
  padding-bottom: 0.851em;
  background-color: $bg-input-active-color;
}

.input__body:focus + .input__placeholder,
.input__body.to-up + .input__placeholder {
  font-size: 1em;
  left: 2.143em;
  transform: translateY(-1.284em);
}

.input::before,
.input::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  right: -3.571em;
  top: calc(50% - 1em);
  transition: border $animation-duration ease,
    transform $animation-duration ease, height $animation-duration ease,
    width $animation-duration ease;
}

.input::before {
  border-left-width: 0.2142em;
  border-left-style: solid;
}

.input::after {
  border-bottom-width: 0.2142em;
  border-bottom-style: solid;
}

.input__valid::before,
.input__valid::after {
  width: 1.3928em;
  height: 0.857em;
  transform: rotate(-45deg);
}

.input__valid::before {
  border-left-color: $success-color;
}

.input__valid::after {
  border-bottom-color: $success-color;
}

.input__invalid .input__body {
  border-color: $alert-color;
}

.input__invalid::before {
  border-left-color: $alert-color;
  height: 1.616em;
  transform: translateX(-0.7009em) rotate(-45deg);
}

.input__invalid::after {
  width: 1.616em;
  border-bottom-color: $alert-color;
  transform: translateY(0.7009em) rotate(-45deg);
}
</style>
