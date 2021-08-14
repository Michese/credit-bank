<template>
  <footer class="footer-page w-100 pb-50 pt-mb-160">
    <div
      class="footer-page__container d-flex flex-column flex-lg-row justify-lg-space-between align-center ph-10 m-auto"
    >
      <div class="mr-lg-105 mb-30 mg-lg-0">
        <div class="mb-5">
          <logo />
        </div>
        <span class="nerin light-gray-color">АО «Кредит Европа Банк»</span>
      </div>
      <nav class="d-flex flex-column flex-mb-row align-start mr-lg-130 mb-30 mb-lg-0">
        <ul class="footer-page__list">
          <li
            v-for="(item, index) in [
              { link: '#', text: 'О банке' },
              { link: '#', text: 'Офисы и банкоматы' },
              { link: '#', text: 'Новости' },
              { link: '#', text: 'Вакансии' },
              { link: '#', text: 'Реализуемое имущество' },
            ]"
            :key="item.text + index"
          >
            <a :href="item.link" class="gray-link">{{ item.text }}</a>
          </li>
        </ul>
        <ul class="footer-page__list">
          <li
            v-for="(item, index) in [
              { link: '#', text: 'Раскрытие информации' },
              { link: '#', text: 'Ставки по вкладам' },
              { link: '#', text: 'Условия и тарифы' },
              { link: '#', text: 'Корпоративное управление' },
              { link: '#', text: 'Карта сайта' },
            ]"
            :key="item.text + index"
          >
            <a :href="item.link" class="gray-link">{{ item.text }}</a>
          </li>
        </ul>
      </nav>

      <div>
        <contact class="mb-25" phone="8 800 950 6570">По России</contact>
        <contact class="mb-25" phone="8 800 950 6570">По Миру</contact>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo/Logo.vue';
import Contact from '@/components/Contact/Contact.vue';

@Options({
  name: 'FooterPage',
  components: {
    Logo,
    Contact,
  },
})
export default class FooterPage extends Vue {}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables/media';

.footer-page {
  &__container {
    max-width: 1200px;
  }
}

@media screen and (min-width: $mb) {
  .footer-page {
    background: transparent url('./assets/crack.svg') no-repeat center top / contain;

    &__list:not(:last-child) {
      margin-right: 80px;
    }
  }
}

@media screen and (min-width: $lg) {
  .footer-page {
    background: transparent url('./assets/crack.svg') no-repeat center top / contain;
  }
}
</style>
