<template>
  <section class="section-advantages mt-lg-0" id="section-advantages">
    <header class="mb-30 mb-mb-80 text-center">
      <h3 class="section-caption mb-10">Путешествие мечты начинается с CARD PLUS</h3>
      <p class="section-advantages__subcaption d-iblock clonia gray-color">
        Мы продумали каждую мелочь. Владельцы CARD PLUS получают особый пакет привилегий, необходимый для любого
        путешествия
      </p>
    </header>

    <main>
      <ul class="d-flex row justify-center justify-mb-space-between">
        <li
          v-for="(item, index) in [
            {
              caption: 'Билеты любых авиакомпаний',
              text: 'Предложения от 300+ авиакомпаний, 185+ lowcost&nbsp;перевозчиков, чартеры от&nbsp;60&nbsp;крупных российскихтуроператоров',
              class: 'section-advantages__item_img_tickets',
            },
            {
              caption: 'Мили больше не&nbsp;сгорают',
              text: 'Мили, накопленные при оплате картой AlfaTravel, не&nbsp;сгорают и остаются на вашем счете, пока вы не решите их потратить',
              class: 'section-advantages__item_img_air',
            },
            {
              caption: 'Продвинутая страховка – бесплатно',
              text: 'Расширенная страховка для&nbsp;всей семьи с&nbsp;учетом экстремальных видов спорта и алкоголя',
              class: 'section-advantages__item_img_insurance',
            },
            {
              caption: 'Доступ к счетам в&nbsp;разных валютах',
              text: 'Текущие счета в рублях, долларах США, евро, английских фунтах стерлингов и швейцарских франках открываются в&nbsp;любой момент',
              class: 'section-advantages__item_img_coins',
            },
          ]"
          class="section-advantages__item col-10 col-mb-5 col-lg-2 mb-20 mb-lg-0 text-center text-mb-left"
          :class="item.class"
          :key="item.class + index"
        >
          <strong class="d-block mb-10 oronia">{{ item.caption }}</strong>
          <p class="menippe">{{ item.text }}</p>
        </li>
      </ul>
    </main>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  name: 'SectionAdvantages',
})
export default class SectionAdvantages extends Vue {
  onScroll(el: { target: HTMLElement }): void {
    console.log('SectionAdvantages', el.target);
  }
}
</script>

<style lang="scss">
@import 'src/styles/variables/media';

.section-advantages {
  max-width: 1028px;
  padding: calc(2 * var(--header-padding-vertical) + var(--logo-height)) 10px 0;
  margin: calc(-2 * var(--header-padding-vertical)) 0 0;
  &__subcaption {
    max-width: 530px;
  }

  &__item {
    &::before {
      display: block;
      margin-bottom: 14px;
    }

    @each $image in ('tickets', 'air', 'insurance', 'coins') {
      &_img_#{$image}:before {
        content: url('./assets/#{$image}.svg');
      }
    }
  }
}

@media screen and (min-width: $mb) {
  .section-advantages {
    margin-bottom: calc(150px - 2 * var(--header-padding-vertical) - var(--logo-height));
  }
}
</style>
