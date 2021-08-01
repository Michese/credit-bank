<template>
  <section class="section-travel-card" id="section-travel-card">
    <header class="section-travel-card__heading">
      <section-caption class="section-travel-card__section-caption"
        >Оформите свою новую карту для путешествий</section-caption
      >
    </header>
    <main>
      <ul class="section-travel-card__benefits">
        <li class="section-travel-card__benefit">
          <Benefit>
            <template #caption>
              <span class="section-travel-card__caption_size_s">до</span> 11%
            </template>

            <template #default>
              Милями за услуги, оплаченные на&nbsp;travel.ru
            </template>
          </Benefit>
        </li>

        <li class="section-travel-card__benefit">
          <Benefit>
            <template #caption>
              <span class="section-travel-card__caption_size_s">до</span> 11%
            </template>

            <template #default>
              Милями за&nbsp;любые покупки по&nbsp;карте
            </template>
          </Benefit>
        </li>

        <li class="section-travel-card__benefit">
          <Benefit>
            <template #caption>
              1 = 1
            </template>

            <template #default>
              Оплата милями билетов любых авиакомпаний по&nbsp;курсу 1 миля = 1
              Р
            </template>
          </Benefit>
        </li>
      </ul>

      <div class="section-travel-card__container">
        <img
          class="section-travel-card__image"
          src="./assets/travel-card.jpg"
          alt="Новая карта для путешествий"
        />
        <div class="section-travel-card__content">
          <span class="section-travel-card__toggles">
            <switcher-card
              v-for="card in switcherCards"
              :key="card.id"
              :card="card"
              class="section-travel-card__switcher-card"
            />
          </span>

          <modal-button class="section-travel-card__btn">
            Отправить заявку
          </modal-button>

          <ul class="section-travel-card__cost-list">
            <li class="section-travel-card__cost-item">
              <span class="section-travel-card__cost-caption">
                Стоимость карты в год (руб.)
              </span>
              <span class="section-travel-card__cost-text">
                6&nbsp;490 (без&nbsp;пакета услуг),
                4&nbsp;990 (с&nbsp;пакетом услуг)
              </span>
            </li>

            <li class="section-travel-card__cost-item">
              <span class="section-travel-card__cost-caption">
                Приветственные мили (шт.)
              </span>
              <span class="section-travel-card__cost-text">
                1&nbsp;000
              </span>
            </li>

            <li class="section-travel-card__cost-item">
              <span class="section-travel-card__cost-caption">
                Мили за покупки
              </span>
              <span class="section-travel-card__cost-text">
                5%
              </span>
            </li>
          </ul>

          <a href="#" class="section-travel-card__details-link">
            Все подробности
          </a>
        </div>
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import SwitcherCardClass from "@/components/SwitcherCard/interface/SwitcherCard"
import { Options, Vue } from "vue-class-component"
import SectionCaption from "@/components/SectionCaption/SectionCaption.vue"
import Benefit from "@/components/Benefit/Benefit.vue"
import SwitcherCard from "@/components/SwitcherCard/SwitcherCard.vue"
import ModalButton from "@/components/ModalButton/ModalButton.vue"

@Options({
  components: {
    SectionCaption,
    Benefit,
    SwitcherCard,
    ModalButton
  },
  data: () => ({
    switcherCards: [
      new SwitcherCardClass("card", "Кредитная карта", "credit-card", true),
      new SwitcherCardClass("card", "Дебетовая карта", "debit-card", false)
    ]
  }),
  computed: {
    comp() {
      console.log(this.switcheCards[0].isCheck)
      console.log(this.switcheCards[1].isCheck)
    }
  }
})
export default class SectionTravelCard extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.section-travel-card {
  margin-top: -2 * $header-padding-vertical - $logo-height;
  margin-bottom: 70px;
  padding-top: 2 * $header-padding-vertical + $logo-height;
}

.section-travel-card__heading {
  display: flex;
  justify-content: center;
}

.section-travel-card__section-caption {
  margin-bottom: 1.66em;
}

.section-travel-card__benefits {
  display: flex;
  max-width: 780px;
  margin: 0 auto;
  margin-bottom: 85px;
}

.section-travel-card__benefit:not(:last-child) {
  margin-right: 99px;
}

.section-travel-card__caption_size_s {
  font-size: 1.285rem;
  line-height: 23px;
}

.section-travel-card__container {
  display: flex;
  max-width: 1130px;
  padding: 10px;
  margin: 0 auto;
}

.section-travel-card__content {
  flex: 1 1 50%;
  min-width: 410px;
}

.section-travel-card__image {
  flex: 1 1 50%;
  margin-right: 110px;
  border-radius: 3%;
}

.section-travel-card__toggles {
  display: inline-block;
  margin-bottom: 50px;
}

.section-travel-card__switcher-card:not(:last-child) {
  margin-right: 40px;
}

.section-travel-card__btn {
  margin-bottom: 65px;
}

.section-travel-card__cost-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
}

.section-travel-card__cost-item {
  display: flex;
}

.section-travel-card__cost-caption,
.section-travel-card__cost-text {
  display: inline-block;
  font-size: 1em;
  line-height: 1.857em;
}

.section-travel-card__cost-caption {
  flex: 1 1 53%;
  margin-right: 25px;
  color: $secondary-color;
}

.section-travel-card__cost-text {
  flex: 1 1 47%;
  color: $fourth-color;
}

.section-travel-card__details-link {
  padding-bottom: 0.2em;
  border-bottom: dashed 0.1em $secondary-color;
  font-size: 1em;
  line-height: 1.857em;
  color: $third-color;
}

.section-travel-card__details-link:hover {
  text-shadow: 0 0 0.5em currentColor;
}
</style>
