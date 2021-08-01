<template>
  <div class="menu" :class="{ isOpen: menuIsOpen }">
    <nav>
      <ul>
        <li class="menu__item">
          <a href="#section-advantages" class="menu__link">
            Какие преимущества
          </a>
        </li>
        <li class="menu__item">
          <a href="#section-care" class="menu__link">Что вы получаете</a>
        </li>
        <li class="menu__item">
          <a href="#section-assistant" class="menu__link">Еще сюрпризы</a>
        </li>
        <li class="menu__item">
          <a href="#section-travel-card" class="menu__link">Оформить карту</a>
        </li>
      </ul>
    </nav>

    <div class="menu__contacts">
      <contact class="menu__contact" phone="8 800 950 6570">
        По России
      </contact>
      <contact class="menu__contact" phone="8 800 950 6570">
        По Миру
      </contact>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import Contact from "@/components/Contact/Contact.vue"

@Options({
  components: {
    Contact
  },
  props: {
    menuIsOpen: Boolean
  }
})
export default class Menu extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.menu {
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 550px;
  max-width: $max-width-menu + 2 * $padding-content-menu;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
  padding: $padding-content-menu;
  background-color: $bg-menu-color;
  transition: transform $duration-opening-menu ease-in-out;
  transform: translateX(-100%);
}

.menu.isOpen {
  transform: translateX(0%);
}

.menu__item:not(:last-child) {
  margin-bottom: 20px;
}

.menu__link {
  font-weight: 700;
  font-size: 1.285em;
  line-height: 1.666em;
  color: $main-color;
}

.menu__link:hover {
  color: $third-color;
}

.menu__contacts {
  position: absolute;
  bottom: 90px;
}

.menu__contact:not(:last-child) {
  margin-bottom: 30px;
}
</style>
