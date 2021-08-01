<template>
  <button
    type="button"
    class="menu-toggle"
    :class="activeClass"
    @click="$emit('openMenu')"
  >
    <div class="line"></div>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"

@Options({
  props: {
    isActive: Boolean
  },
  emits: ["openMenu"],
  computed: {
    activeClass() {
      return {
        "is-active": this.isActive
      }
    }
  }
})
export default class MenuToggle extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

$animation-duration: .5s;
$animation-start-duration: 0.2s;

@keyframes toggle-activating-before {
  0% {
    transform: translate(0, 0) rotate(0);
  }
  33% {
    transform: translateX(100%);
  }
  66% {
    transform: translate(100%, -70%) rotate(-45deg);
  }
  100% {
    transform: translate(0, 30%) rotate(-45deg);
  }
}

@keyframes toggle-activating-after {
  0% {
    transform: translate(0, 0) rotate(0);
  }
  33% {
    transform: translateX(-100%);
  }
  66% {
    transform: translate(-100%, calc(-120% - 0.05em)) rotate(45deg);
  }
  100% {
    transform: translate(0, calc(-20% - 0.05em)) rotate(45deg);
  }
}

@keyframes toggle-deactivating-before {
  0% {
    transform: translate(0, 30%) rotate(-45deg);
  }
  33% {
    transform: translate(100%, -70%) rotate(-45deg);
  }
  66% {
    transform: translateX(100%);
  }
  100% {
    transform: translate(0, 0) rotate(0);
  }
}

@keyframes toggle-deactivating-after {
  0% {
    transform: translate(0, calc(-20% - 0.05em)) rotate(45deg);
  }
  33% {
    transform: translate(-100%, calc(-120% - 0.05em)) rotate(45deg);
  }
  66% {
    transform: translateX(-100%);
  }
  100% {
    transform: translate(0, 0) rotate(0);
  }
}

.menu-toggle {
  display: flex;
  align-items: center;
  position: relative;
  border: none;
  padding: 0;
  width: 1em;
  height: 0.76em;
  font-size: 1.785em;
  background-color: transparent;
  color: $third-color;
  cursor: pointer;
}

.menu-toggle::before,
.menu-toggle::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.menu-toggle::before {
  border-top: 0.15em solid currentColor;
  animation: toggle-deactivating-before $animation-duration ease-in-out;
}

.menu-toggle::after {
  border-bottom: 0.15em solid currentColor;
  animation: toggle-deactivating-after $animation-duration ease-in-out;
}

.line {
  width: 0.8em;
  border-bottom: 0.15em solid currentColor;
  transition: width $animation-start-duration $animation-duration -
    $animation-start-duration ease-in-out;
}

.menu-toggle.is-active::before {
  animation: toggle-activating-before $animation-duration ease-in-out forwards;
}

.menu-toggle.is-active::after {
  animation: toggle-activating-after $animation-duration ease-in-out forwards;
}

.menu-toggle.is-active .line {
  width: 0;
  transition: width $animation-start-duration ease-in-out;
}
</style>
