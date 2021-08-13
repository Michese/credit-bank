<template>
  <section class="section-travel-card mb-70" id="section-travel-card">
    <header class="d-flex justify-center">
      <h3 class="section-travel-card__section-caption section-caption text-center">
        Оформите свою новую карту для путешествий
      </h3>
    </header>
    <main>
      <ul class="section-travel-card__benefits d-flex flex-column align-center">
        <li
          v-for="(item, index) in [
            { before: 'до ', caption: '11%', text: 'Милями за услуги, оплаченные на&nbsp;travel.ru' },
            { before: 'до ', caption: '11%', text: 'Милями за&nbsp;любые покупки по&nbsp;карте' },
            { caption: '1 = 1', text: 'Оплата милями билетов любых авиакомпаний по&nbsp;курсу 1 миля = 1 Р' },
          ]"
          class="section-travel-card__benefit"
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
      </ul>

      <div class="section-travel-card__container d-flex flex-column align-center p-10">
        <img
          class="section-travel-card__image mr-lg-110 mb-20 mb-lg-0 rounded"
          src="./assets/travel-card.jpg"
          alt="Новая карта для путешествий"
        />
        <div class="section-travel-card__content d-flex flex-column align-center">
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

          <modal-button class="section-travel-card__btn" :citizenship="changedId"> Отправить заявку </modal-button>

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
              <span class="section-travel-card__cost-caption d-iblock nerin gray-color">
                {{ item.left }}
              </span>
              <span class="section-travel-card__cost-text d-iblock nerin light-gray-color">
                {{ item.right }}
              </span>
            </li>
          </ul>

          <a href="#" class="section-travel-card__details-link nerin peru-color"> Все подробности </a>
        </div>
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
}
</script>

<style lang="scss">
@import 'src/styles/variables/media';
.section-travel-card {
  margin-top: calc(-2 * var(--header-padding-vertical) - var(--logo-height));
  padding-top: calc(2 * var(--header-padding-vertical) + var(--logo-height));

  &__section-caption {
    margin-bottom: 1.66em;
  }

  &__benefits {
    max-width: 780px;
    margin: 0 auto 85px;
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

  &__btn {
    margin-bottom: 65px;
  }

  &__cost-caption {
    flex: 1 1 30%;
    margin-right: 25px;
  }

  &__cost-text {
    flex: 1 1 30%;
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
    &__benefits {
      flex-direction: row;
    }

    &__benefit:not(:last-child) {
      margin-right: 99px;
      margin-bottom: 0;
    }

    &__content {
      flex: 1 1 50%;
      min-width: 410px;
    }

    &__switcher-card:not(:last-child) {
      margin-right: 40px;
    }

    &__cost-caption {
      flex: 1 1 53%;
    }

    &__cost-text {
      flex: 1 1 47%;
    }
  }
}

@media screen and (min-width: $lg) {
  .section-travel-card {
    &__image {
      flex: 1 1 50%;
      margin-right: 110px;
      margin-bottom: 0;
    }

    &__container {
      flex-direction: row;
    }

    &__content {
      align-items: flex-start;
    }
  }
}
</style>
