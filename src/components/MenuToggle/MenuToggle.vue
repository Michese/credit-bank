<template>
  <button
    type="button"
    class="menu-toggle d-flex align-center p-rel p-0 b-none transparent peru-color c-pointer"
    :class="activeClass"
  >
    <div class="line"></div>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'MenuToggle',
})
export default class MenuToggle extends Vue {
  @Prop({
    require: true,
  })
  private isActive!: boolean;

  get activeClass(): { 'is-active': boolean } {
    return {
      'is-active': this.isActive,
    };
  }
}
</script>

<style lang="scss">
.menu-toggle {
  --animation-duration: 0.5s;
  --animation-start-duration: 0.3s;

  width: 1em;
  height: 0.76em;
  font-size: 1.785em;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  &::before {
    border-top: 0.15em solid currentColor;
    animation: toggle-deactivating-before var(--animation-duration) ease-in-out;
  }

  &::after {
    border-bottom: 0.15em solid currentColor;
    animation: toggle-deactivating-after var(--animation-duration) ease-in-out;
  }

  .line {
    width: 0.8em;
    border-bottom: 0.15em solid currentColor;
    transition: width var(--animation-start-duration) calc(var(--animation-duration) - var(--animation-start-duration))
      ease-in-out;
  }

  &.is-active {
    .line {
      width: 0;
    }

    &::before {
      animation: toggle-activating-before var(--animation-duration) ease-in-out forwards;
    }

    &::after {
      animation: toggle-activating-after var(--animation-duration) ease-in-out forwards;
    }
  }
}

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
</style>
