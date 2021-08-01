<template>
  <header class="header-page">
    <div class="header-page__inner">
      <menu-toggle
        class="header-page__menu-toggle"
        :isActive="menuIsOpen"
        @open-menu="$emit('openMenu')"
      />
      <logo />
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import MenuToggle from "@/components/MenuToggle/MenuToggle.vue"
import Logo from "@/components/Logo/Logo.vue"

@Options({
  components: {
    MenuToggle,
    Logo
  },
  props: {
    menuIsOpen: Boolean
  },
  emits: ["openMenu"]
})
export default class HeaderPage extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.header-page {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  margin: 45px auto 80px;
  padding: $header-padding-vertical 10px;
  background-color: inherit;
}

.header-page__inner {
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.header-page__menu-toggle {
  position: absolute;
  top: calc(50% - 0.38em);
  left: -76px;
}

.header-page__logo {
  margin-top: 10px;
}
</style>
