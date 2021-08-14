<template>
  <section class="section-care section-margin mt-mb-0 ph-10" id="section-care">
    <header class="mb-75">
      <h3 class="section-caption text-center">Мы позаботились, чтобы вы получили</h3>
    </header>
    <main>
      <transition-group
        name="list-from-right"
        tag="ul"
        class="row justify-center justify-mb-space-between align-center align-mb-start"
        v-scrollanimation="onScroll"
      >
        <li
          v-for="item in items"
          :key="item.title"
          v-show="showList"
          class="section-care__item col-10 col-mb-5 col-lg-2 d-block mb-40 text-center text-mb-left"
          :class="item.class"
        >
          <strong class="d-block mb-5 oronia"> {{ item.title }} </strong>
          <p v-if="item.text" class="section-care__text d-iblock menippe">
            {{ item.text }}
          </p>
          <span v-if="!!item.images" class="section-care__image-list row justify-center justify-mb-start align-end">
            <img
              v-for="img in item.images"
              :key="item.title + img"
              :src="img"
              :alt="img"
              class="section-care__image d-iblock mt-18"
            />
          </span>
        </li>
      </transition-group>
    </main>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import megaphone from './assets/megaphone.png';
import tele2 from './assets/tele2.png';
import mts from './assets/mts.png';
import bilain from './assets/bilain.png';
import wheely from './assets/wheely.png';
import gett from './assets/gett.png';

@Options({
  name: 'SectionCare',
})
export default class SectionCare extends Vue {
  showList = false;
  items = [
    {
      title: 'Бесплатный безлимитный интернет в роуминге',
      class: 'section-care__item_img_unlimited-internet',
      images: [megaphone, tele2, mts, bilain],
    },
    {
      title: 'Бесплатная упаковка багажа',
      class: 'section-care__item_img_packing-of-luggage',
      text: 'Держатели карт Visa Signature могут упаковать багаж в крупных аэропортах России',
    },
    {
      title: 'Бесплатный доступ в\xA0приложении App\xA0In\xA0The\xA0Air',
      class: 'section-care__item_img_app-access',
      text: 'Бесплатная премиум подписка при покупке авиабилетов на\xA0travel.alfabank.ru',
    },
    {
      title: 'Такси бизнес-класса со\xA0скидкой 20%',
      class: 'section-care__item_img_business-class-taxi',
      images: [wheely, gett],
    },
    {
      title: 'Скидка в\xA0ресторанах Novikov Group в\xA0аэропорту Шереметьево',
      class: 'section-care__item_img_novikov-group',
    },
    {
      title: 'Доступ в\xA0бизнес-залы Priority\xA0Pass по всему миру',
      class: 'section-care__item_img_priority-pass',
    },
  ];
  onScroll(): void {
    this.showList = true;
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables/media';

.section-care {
  max-width: 1002px;

  &__item {
    &::before {
      display: block;
      margin-bottom: 10px;
    }

    @each $image
      in (
        'unlimited-internet',
        'packing-of-luggage',
        'app-access',
        'business-class-taxi',
        'novikov-group',
        'priority-pass'
      )
    {
      &_img_#{$image}:before {
        content: url('./assets/#{$image}.jpg');
      }
    }
  }

  &__image:not(:last-child) {
    margin-right: 25px;
  }
}

@media screen and (min-width: $mb) {
  .section-care {
    margin-bottom: calc(90px - 2 * var(--header-padding-vertical) - var(--logo-height));
    &__item::before {
      margin-bottom: 0;
    }

    &__text {
      max-width: 245px;
    }
  }
}
</style>
