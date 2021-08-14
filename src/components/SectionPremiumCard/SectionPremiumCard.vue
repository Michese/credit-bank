<template>
  <section class="section-premium-card w-100">
    <div class="section-premium-card__container d-flex d-lg-block flex-column align-center p-rel ph-10 m-auto">
      <header class="section-premium-card__heading d-iblock mb-50">
        <h2 class="d-block d-lg-inline mb-20 mb-lg-0 text-center text-lg-left promo-caption">Твоя премиум карта</h2>
        <span class="section-premium-card__desc d-block d-lg-iblock ml-lg-30 text-center text-lg-left bormea">
          Лучшая карта для любителей путешествий
        </span>
      </header>

      <main class="d-flex flex-column align-center align-lg-start" v-scrollanimation="onScrollMain">
        <transition-group
          name="list-from-left"
          tag="ul"
          class="section-premium-card__list row justify-space-between mb-lg-70"
        >
          <li
            v-for="(item, index) in [
              { caption: '11%', text: 'Вернем за&nbsp;покупки милями' },
              { caption: '0%', text: 'Бесплатное снятие наличных по всему миру' },
              { caption: '7%', text: 'До 7% на&nbsp;остаток по&nbsp;счету' },
              { caption: '0р', text: 'Бесплатное годовое обслуживание' },
            ]"
            class="section-premium-card__benefit mb-35 col-5"
            v-show="showList"
            :key="item.text + index"
          >
            <benefit>
              <template #caption>
                {{ item.caption }}
              </template>

              {{ item.text }}
            </benefit>
          </li>
        </transition-group>
        <transition name="fade-in">
          <a href="#section-travel-card" v-show="showButton" class="button">Заказать сейчас</a>
        </transition>
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Benefit from '@/components/Benefit/Benefit.vue';
import ModalButton from '@/components/ModalButton/ModalButton.vue';

@Options({
  name: 'SectionPremiumCard',
  components: {
    Benefit,
    ModalButton,
  },
})
export default class SectionPremiumCard extends Vue {
  showList = false;
  showButton = false;
  onScrollMain(): void {
    this.showButton = true;
    this.showList = true;
  }
}
</script>

<style lang="scss">
@import 'src/styles/variables/media';

.section-premium-card {
  background: transparent url('./assets/cracks.svg') no-repeat center 1.5em / contain;

  &__container {
    max-width: 1000px;
  }

  &__heading {
    max-width: 735px;
    vertical-align: center;
  }
}
@media screen and (min-width: $lg) {
  .section-premium-card {
    padding-bottom: calc(250px - 2 * var(--header-padding-vertical) - var(--logo-height));
    --width-list: 300px;

    &__desc {
      max-width: 303px;
    }

    &__container::after {
      content: url('./assets/premium-card2.png');
      display: block;
      position: absolute;
      top: 1.5em;
      left: var(--width-list);
    }

    &__list {
      max-width: var(--width-list);
    }

    &__benefit:nth-child(2n - 1) {
      max-width: 115px;
    }
  }
}
</style>
