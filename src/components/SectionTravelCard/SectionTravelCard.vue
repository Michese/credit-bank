<template>
  <section class="section-travel-card section-margin mb-70" id="section-travel-card">
    <header class="d-flex justify-center">
      <h3 class="mb-50 section-caption text-center">Оформите свою новую карту для путешествий</h3>
    </header>
    <main>
      <transition-group
        name="list-from-right"
        tag="ul"
        class="section-travel-card__benefits d-flex flex-column flex-mb-row m-auto mb-85 align-center"
        v-scrollanimation="onScrollList"
      >
        <li
          v-for="(item, index) in [
            { before: 'до ', caption: '11%', text: 'Милями за услуги, оплаченные на&nbsp;travel.ru' },
            { before: 'до ', caption: '11%', text: 'Милями за&nbsp;любые покупки по&nbsp;карте' },
            { caption: '1 = 1', text: 'Оплата милями билетов любых авиакомпаний по&nbsp;курсу 1 миля = 1 Р' },
          ]"
          class="section-travel-card__benefit"
          v-show="showList"
          :key="item.text + index"
        >
          <Benefit :before="item.before">
            <template #caption>
              {{ item.caption }}
            </template>

            <template #default>
              {{ item.text }}
            </template>
          </Benefit>
        </li>
      </transition-group>

      <div
        class="section-travel-card__container d-flex flex-column flex-lg-row align-center p-10"
        v-scrollanimation="onScrollContent"
      >
        <transition name="from-left">
          <img
            v-show="showContent"
            class="col-11 col-lg-6 mr-lg-110 mb-20 mb-lg-0 rounded"
            src="./assets/travel-card.jpg"
            alt="Новая карта для путешествий"
          />
        </transition>
        <transition name="fade-in">
          <div
            v-show="showContent"
            class="section-travel-card__content d-flex col-6 flex-column align-lg-start align-center"
          >
            <span class="d-flex flex-wrap justify-center">
              <switcher-card
                v-for="(card, index) in switcher.switcherCards"
                :key="card.id"
                :name="switcher.name"
                :card="card"
                :changed="switcher.changed === index"
                @change-switcher="changeSwitcher(index)"
                class="section-travel-card__switcher-card d-iblock mb-50"
              />
            </span>
            <modal-button class="mb-65" :citizenship="changedId"> Отправить заявку </modal-button>

            <ul class="d-flex flex-column mb-25">
              <li
                v-for="item in [
                  {
                    left: 'Стоимость карты в год (руб.)',
                    right: '6&nbsp;490 (без&nbsp;пакета услуг), 4&nbsp;990 (с&nbsp;пакетом услуг)',
                  },
                  { left: 'Приветственные мили (шт.)', right: '1&nbsp;000' },
                  { left: 'Мили за покупки', right: '5%' },
                ]"
                class="d-flex"
                :key="item.left"
              >
                <span class="section-travel-card__cost d-iblock mr-25 nerin gray-color">
                  {{ item.left }}
                </span>
                <span class="section-travel-card__definition d-iblock nerin light-gray-color">
                  {{ item.right }}
                </span>
              </li>
            </ul>

            <a href="#" class="section-travel-card__details-link nerin peru-color"> Все подробности </a>
          </div>
        </transition>
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Benefit from '@/components/Benefit/Benefit.vue';
import SwitcherCard from '@/components/SwitcherCard/SwitcherCard.vue';
import ModalButton from '@/components/ModalButton/ModalButton.vue';
import { TSwitcherCard } from '@/types/SwitcherCard';

@Options({
  name: 'SectionTravelCard',
  components: {
    Benefit,
    SwitcherCard,
    ModalButton,
  },
})
export default class SectionTravelCard extends Vue {
  showList = false;
  showContent = false;
  switcher = {
    name: 'card',
    changed: 0,
    switcherCards: [
      { label: 'Кредитная карта', id: 'credit-card' },
      { label: 'Дебетовая карта', id: 'debit-card' },
    ] as TSwitcherCard[],
  };
  get changedId(): string {
    return this.switcher.switcherCards[this.switcher.changed].id;
  }
  changeSwitcher(index: number): void {
    this.switcher.changed = index;
  }
  onScrollList(): void {
    this.showList = true;
  }
  onScrollContent(): void {
    this.showContent = true;
  }
}
</script>

<style lang="scss">
@import 'src/styles/variables/media';
.section-travel-card {
  &__benefits {
    max-width: 780px;
  }

  &__benefit {
    max-width: 200px;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__container {
    max-width: 1130px;
  }

  &__switcher-card:not(:last-child) {
    margin-right: 10px;
  }
  &__cost {
    flex-basis: 53%;
  }

  &__definition {
    flex-basis: 47%;
  }
  &__details-link {
    padding-bottom: 0.2em;
    border-bottom: dashed 0.1em var(--gray-color);
    align-self: flex-start;

    &:hover {
      text-shadow: 0 0 0.5em currentColor;
    }
  }
}

@media screen and (min-width: $mb) {
  .section-travel-card {
    &__benefit:not(:last-child) {
      margin-right: 99px;
      margin-bottom: 0;
    }

    &__content {
      min-width: 410px;
    }

    &__switcher-card:not(:last-child) {
      margin-right: 40px;
    }
  }
}
</style>
