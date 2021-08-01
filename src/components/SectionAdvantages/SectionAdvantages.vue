<template>
  <section class="section-advantages" id="section-advantages">
    <header class="section-advantages__heading">
      <section-caption class="section-advantages__section-caption">
        Путешествие мечты начинается с CARD PLUS
      </section-caption>
      <p class="section-advantages__subcaption">
        Мы продумали каждую мелочь. Владельцы CARD PLUS получают особый пакет
        привилегий, необходимый для любого путешествия
      </p>
    </header>

    <main>
      <ul class="section-advantages__list">
        <li
          class="section-advantages__advantage-item section-advantages__advantage-item_img_tickets"
        >
          <strong class="advantage__advantage-caption">
            Билеты любых авиакомпаний
          </strong>
          <p class="advantage__advantage-text">
            Предложения от 300+ авиакомпаний, 185+ lowcost&nbsp;перевозчиков,
            чартеры от&nbsp;60&nbsp;крупных российскихтуроператоров
          </p>
        </li>

        <li
          class="section-advantages__advantage-item section-advantages__advantage-item_img_air"
        >
          <strong class="advantage__advantage-caption">
            Мили больше не&nbsp;сгорают
          </strong>
          <p class="advantage__advantage-text">
            Мили, накопленные при оплате картой AlfaTravel, не&nbsp;сгорают и
            остаются на вашем счете, пока вы не решите их потратить
          </p>
        </li>

        <li
          class="section-advantages__advantage-item section-advantages__advantage-item_img_insurance"
        >
          <strong class="advantage__advantage-caption">
            Продвинутая страховка – бесплатно
          </strong>
          <p class="advantage__advantage-text">
            Расширенная страховка для&nbsp;всей семьи с&nbsp;учетом
            экстремальных видов спорта и алкоголя
          </p>
        </li>

        <li
          class="section-advantages__advantage-item section-advantages__advantage-item_img_coins"
        >
          <strong class="advantage__advantage-caption">
            Доступ к счетам в&nbsp;разных валютах
          </strong>
          <p class="advantage__advantage-text">
            Текущие счета в рублях, долларах США, евро, английских фунтах
            стерлингов и швейцарских франках открываются в&nbsp;любой момент
          </p>
        </li>
      </ul>
    </main>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import SectionCaption from "@/components/SectionCaption/SectionCaption.vue"

@Options({
  components: {
    SectionCaption
  }
})
export default class SectionAdvantages extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.section-advantages {
  max-width: 1028px;
  margin: 0 auto 150px - 2  * $header-padding-vertical - $logo-height;
  padding: 2  * $header-padding-vertical + $logo-height 10px 0;
}

.section-advantages__heading {
  text-align: center;
  margin-bottom: 80px;
}

.section-advantages__section-caption {
  margin-bottom: 0.267em;
}

.section-advantages__subcaption {
  display: inline-block;
  max-width: 530px;
  font-size: 1em;
  line-height: 1.2856em;
  font-weight: 700;
  color: $secondary-color;
}

.section-advantages__list {
  display: flex;
}

.section-advantages__advantage-item {
  flex: 1 1 25%;
}

.section-advantages__advantage-item:not(:last-child) {
  margin-right: 63px;
}

.section-advantages__advantage-item::before {
  display: block;
  margin-bottom: 1em;
}

.section-advantages__advantage-item_img_tickets:before {
  content: url("./assets/tickets.svg");
}

.section-advantages__advantage-item_img_air:before {
  content: url("./assets/air.svg");
}

.section-advantages__advantage-item_img_insurance:before {
  content: url("./assets/insurance.svg");
}

.section-advantages__advantage-item_img_coins:before {
  content: url("./assets/coins.svg");
}

.advantage__advantage-caption {
  display: block;
  font-size: 1.286em;
  line-height: 1.278em;
  font-weight: 800;
  color: $main-color;
  margin-bottom: 0.5em;
}

.advantage__advantage-text {
  font-size: 1em;
  line-height: 1.43em;
  font-weight: 700;
  color: $secondary-color;
}
</style>
