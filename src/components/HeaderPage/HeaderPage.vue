<template>
  <header class="header-page p-sticky z-index-3 mb-mb-80">
    <div class="header-page__inner d-flex align-center justify-space-between justify-mb-start m-auto">
      <menu-toggle class="mr-20 mt-mb-75" :isActive="menuIsOpen" @click="toggleMenu" />
      <logo />
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import MenuToggle from '@/components/MenuToggle/MenuToggle.vue';
import Logo from '@/components/Logo/Logo.vue';

@Options({
  name: 'HeaderPage',
  components: {
    MenuToggle,
    Logo,
  },
})
export default class HeaderPage extends Vue {
  @Prop({
    require: true,
  })
  private menuIsOpen!: boolean;
  @Emit() toggleMenu(): void {
    return void 0;
  }
}
</script>

<style lang="scss">
.header-page {
  top: 0;
  left: 0;
  right: 0;
  margin: 20px 0 20px;
  padding: var(--header-padding-vertical) 10px;
  background-color: inherit;

  &__inner {
    max-width: 1200px;
  }
}
</style>
