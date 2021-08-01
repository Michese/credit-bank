<template>
  <nav-menu :menuIsOpen="menuIsOpen" />
  <div class="page-content" :class="{ 'menu-opened': menuIsOpen }">
    <header-page @open-menu="openMenu" :menuIsOpen="menuIsOpen" />
    <main>
      <section-premium-card />
      <section-advantages />
      <section-care />
      <section-assistant />
<!--      <section-travel-card />-->
    </main>
    <footer-page />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import NavMenu from "@/components/Menu/Menu.vue"
import HeaderPage from "@/components/HeaderPage/HeaderPage.vue"
import SectionPremiumCard from "@/components/SectionPremiumCard/SectionPremiumCard.vue"
import SectionAdvantages from "@/components/SectionAdvantages/SectionAdvantages.vue"
import SectionCare from "@/components/SectionCare/SectionCare.vue"
import SectionAssistant from "@/components/SectionAssistant/SectionAssistant.vue"
import SectionTravelCard from "@/components/SectionTravelCard/SectionTravelCard.vue"
import FooterPage from "@/components/FooterPage/FooterPage.vue"

@Options({
  components: {
    NavMenu,
    SectionPremiumCard,
    HeaderPage,
    SectionAdvantages,
    SectionCare,
    SectionAssistant,
    SectionTravelCard,
    FooterPage
  },
  data: () => ({
    menuIsOpen: false
  }),
  methods: {
    openMenu() {
      this.menuIsOpen = !this.menuIsOpen
    }
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.page-content {
  position: relative;
  background-color: inherit;
  transition: margin $duration-opening-menu ease-in-out;
}

.page-content.menu-opened {
  margin-left: $max-width-menu;
}
</style>
