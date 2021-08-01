<template>
  <section class="section-care" id="section-care">
    <header class="section-care__heading">
      <section-caption>Мы позаботились, чтобы вы получили</section-caption>
    </header>
    <main>
      <ul class="section-care__list">
        <li
          class="section-care__item section-care__item_img_unlimited-internet"
        >
          <strong class="section-care__caption">
            Бесплатный безлимитный интернет в роуминге
          </strong>
          <span class="section-care__images">
            <img
              src="./assets/megaphone.png"
              alt="megaphone"
              class="section-care__image"
            />
            <img
              src="./assets/tele2.png"
              alt="tele2"
              class="section-care__image"
            />
            <img src="./assets/mts.png" alt="mts" class="section-care__image" />
            <img
              src="./assets/bilain.png"
              alt="bilain"
              class="section-care__image"
            />
          </span>
        </li>

        <li
          class="section-care__item section-care__item_img_packing-of-luggage"
        >
          <strong class="section-care__caption">
            Бесплатная упаковка багажа
          </strong>
          <p class="section-care__text">
            Держатели карт Visa Signature могут упаковать багаж в крупных
            аэропортах России
          </p>
        </li>

        <li class="section-care__item section-care__item_img_app-access">
          <strong class="section-care__caption">
            Бесплатный доступ в&nbsp;приложении App&nbsp;In&nbsp;The&nbsp;Air
          </strong>
          <p class="section-care__text">
            Бесплатная премиум подписка при покупке авиабилетов
            на&nbsp;travel.alfabank.ru
          </p>
        </li>

        <li
          class="section-care__item section-care__item_img_business-class-taxi"
        >
          <strong class="section-care__caption">
            Такси бизнес-класса со&nbsp;скидкой 20%
          </strong>
          <span class="section-care__images">
            <img
              src="./assets/wheely.png"
              alt="wheely"
              class="section-care__image"
            />
            <img
              src="./assets/gett.png"
              alt="gett"
              class="section-care__image"
            />
          </span>
        </li>

        <li class="section-care__item section-care__item_img_novikov-group">
          <strong class="section-care__caption">
            Скидка в&nbsp;ресторанах Novikov Group в&nbsp;аэропорту Шереметьево
          </strong>
        </li>

        <li class="section-care__item section-care__item_img_priority-pass">
          <strong class="section-care__caption">
            Доступ в&nbsp;бизнес-залы Priority&nbsp;Pass по всему миру
          </strong>
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
export default class SectionCare extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.section-care {
  max-width: 1002px;
  margin: 0 auto 90px - 2  * $header-padding-vertical - $logo-height;
  padding: 2  * $header-padding-vertical + $logo-height 10px 0;
}

.section-care__heading {
  margin-bottom: 75px;
}

.section-care__list {
  display: flex;
  flex-wrap: wrap;
}

.section-care__item {
  display: block;
  max-width: 281px;
  flex: 1 1 calc(100% / 3);
  margin-bottom: 45px;
}

.section-care__item:not(:nth-child(3n)) {
  margin-right: 69px;
}

.section-care__item::before {
  display: block;
  text-align: center;
  margin-bottom: 2em;
}

.section-care__item_img_unlimited-internet::before {
  content: url("./assets/unlimited-internet.jpg");
}

.section-care__item_img_packing-of-luggage::before {
  content: url("./assets/packing-of-luggage.jpg");
}

.section-care__item_img_app-access::before {
  content: url("./assets/app-access.jpg");
}

.section-care__item_img_business-class-taxi::before {
  content: url("./assets/business-class-taxi.jpg");
}

.section-care__item_img_novikov-group::before {
  content: url("./assets/novikov-group.jpg");
}

.section-care__item_img_priority-pass::before {
  content: url("./assets/priority-pass.jpg");
}

.section-care__caption {
  display: inline-block;
  margin-bottom: 0.3em;
  font-size: 1.286em;
  line-height: 1.277em;
  font-weight: 800;
  color: $main-color;
}

.section-care__text {
  display: inline-block;
  max-width: 245px;
  font-size: 1em;
  line-height: 1.43em;
  font-weight: 700;
  color: $secondary-color;
}

.section-care__images {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}

.section-care__image {
  display: inline-block;
  margin-top: 1.2em;
}

.section-care__image:not(:last-child) {
  margin-right: 25px;
}
</style>
