<template>
  <footer class="footer-page">
    <div class="footer-page__container">
      <div class="footer-page__logo-wrapper">
        <div class="footer-page__logo-image">
          <logo сlass="footer-page__logo" />
        </div>
        <span class="footer-page__logo-caption">АО «Кредит Европа Банк»</span>
      </div>
      <nav class="footer-page__nav">
        <ul class="footer-page__list">
          <li>
            <a href="#" class="footer-page__link">О банке</a>
          </li>
          <li>
            <a href="#" class="footer-page__link">Офисы и банкоматы</a>
          </li>
          <li>
            <a href="#" class="footer-page__link">Новости</a>
          </li>
          <li>
            <a href="#" class="footer-page__link">Вакансии</a>
          </li>
          <li>
            <a href="#" class="footer-page__link">Реализуемое имущество</a>
          </li>
        </ul>
        <ul class="footer-page__list">
          <li>
            <a href="#" class="footer-page__link">Раскрытие информации</a>
          </li>
          <li>
            <a href="#" class="footer-page__link">Ставки по вкладам</a>
          </li>
          <li>
            <a href="#" class="footer-page__link">Условия и тарифы</a>
          </li>
          <li>
            <a href="#" class="footer-page__link">Корпоративное управление</a>
          </li>
          <li>
            <a href="#" class="footer-page__link">Карта сайта</a>
          </li>
        </ul>
      </nav>

      <div>
        <contact class="footer-page__contact" phone="8 800 950 6570"
          >По России</contact
        >
        <contact class="footer-page__contact" phone="8 800 950 6570"
          >По Миру</contact
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import Logo from "@/components/Logo/Logo.vue"
import Contact from "@/components/Contact/Contact.vue"
@Options({
  components: {
    Logo,
    Contact
  }
})
export default class FooterPage extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.footer-page {
  padding-top: 167px;
  margin-bottom: 50px;
  background: transparent url("./assets/crack.svg") no-repeat center top /
    contain;
}

.footer-page__container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
}

.footer-page__logo-wrapper {
  margin-right: 105px;
}

.footer-page__logo-image {
  margin-bottom: 0.33em;
}

.footer-page__logo-caption {
  font-size: 1em;
  line-height: 1.857em;
  color: $fourth-color;
}

.footer-page__nav {
  display: flex;
  margin-right: 130px;
}

.footer-page__list:not(:last-child) {
  margin-right: 80px;
}

.footer-page__link {
  font-size: 1em;
  line-height: 2.14em;
  color: $secondary-color;
}

.footer-page__link:hover {
  color: $main-color;
}

.footer-page__contact {
  margin-bottom: 25px;
}
</style>
