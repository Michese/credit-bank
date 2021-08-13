<template>
  <nav-menu :menuIsOpen="menuIsOpen" @close-menu="closeMenu" />
  <div class="page-content p-rel" :class="{ 'menu-opened': menuIsOpen }">
    <header-page @toggle-menu="toggleMenu" :menuIsOpen="menuIsOpen" />
    <main class="main d-flex flex-column align-center overflow-x-hidden">
      <section-premium-card />
      <section-advantages />
      <section-care />
      <section-assistant />
      <section-travel-card />
    </main>
    <footer-page />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavMenu from '@/components/Menu/Menu.vue';
import HeaderPage from '@/components/HeaderPage/HeaderPage.vue';
import SectionPremiumCard from '@/components/SectionPremiumCard/SectionPremiumCard.vue';
import SectionAdvantages from '@/components/SectionAdvantages/SectionAdvantages.vue';
import SectionCare from '@/components/SectionCare/SectionCare.vue';
import SectionAssistant from '@/components/SectionAssistant/SectionAssistant.vue';
import SectionTravelCard from '@/components/SectionTravelCard/SectionTravelCard.vue';
import FooterPage from '@/components/FooterPage/FooterPage.vue';

@Options({
  name: 'App',
  components: {
    NavMenu,
    SectionPremiumCard,
    HeaderPage,
    SectionAdvantages,
    SectionCare,
    SectionAssistant,
    SectionTravelCard,
    FooterPage,
  },
})
export default class App extends Vue {
  menuIsOpen = false;
  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }
  closeMenu(): void {
    this.menuIsOpen = false;
  }
}
</script>

<style lang="scss">
@import 'src/styles/variables/media';
.page-content {
  background-color: inherit;
  transition: margin var(--duration-opening-menu) ease-in-out;
  &.menu-opened {
    margin-left: 0;
  }
}

@media screen and (min-width: $lg) {
  .page-content.menu-opened {
    margin-left: calc(2 * var(--max-width-menu));
  }
}
</style>
