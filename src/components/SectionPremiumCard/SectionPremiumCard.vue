<template>
  <section class="section-premium-card">
    <div class="section-premium-card__container">
      <header class="section-premium-card__heading">
        <h2 class="section-premium-card__caption">Твоя премиум карта</h2>
        <span class="section-premium-card__desc">
          Лучшая карта для любителей путешествий
        </span>
      </header>

      <main>
        <ul class="section-premium-card__list">
          <li class="section-premium-card__benefit">
            <benefit>
              <template #caption>
                11%
              </template>

              Вернем за&nbsp;покупки милями
            </benefit>
          </li>

          <li class="section-premium-card__benefit">
            <benefit>
              <template #caption>
                0%
              </template>

              Бесплатное снятие наличных по всему миру
            </benefit>
          </li>

          <li class="section-premium-card__benefit">
            <benefit>
              <template #caption>
                7%
              </template>

              До 7% на&nbsp;остаток по&nbsp;счету
            </benefit>
          </li>

          <li class="section-premium-card__benefit">
            <benefit>
              <template #caption>
                0р
              </template>

              Бесплатное годовое обслуживание
            </benefit>
          </li>
        </ul>
        <modal-button class="section-premium-card__btn">
          Заказать сейчас
        </modal-button>
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import Benefit from "@/components/Benefit/Benefit.vue"
import ModalButton from "@/components/ModalButton/ModalButton.vue"

@Options({
  components: {
    Benefit,
    ModalButton
  }
})
export default class SectionPremiumCard extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
$width-list: 300px;

.section-premium-card {
  padding-bottom: 250px - 2  * $header-padding-vertical - $logo-height;
  background: transparent url("./assets/cracks.svg") no-repeat center 1.5em /
    contain;
  z-index: 1;
}

.section-premium-card > * {
  z-index: 2;
}

.section-premium-card__container {
  position: relative;
  max-width: 1000px;
  padding: 0 10px;
  margin: 0 auto;
}

.section-premium-card__container::after {
  content: url("./assets/premium-card2.png");
  display: block;
  position: absolute;
  top: 1.5em;
  left: $width-list;
}

.section-premium-card__heading {
  display: inline-block;
  max-width: 735px;
  vertical-align: center;
  margin-bottom: 50px;
}

.section-premium-card__caption {
  display: inline;
  font-size: 6.857em;
  line-height: 1.135em;
  font-weight: 900;
  color: $main-color;
}

.section-premium-card__desc {
  display: inline-block;
  max-width: 303px;
  margin-left: 1.367em;
  font-size: 1.714em;
  line-height: 1.25em;
  font-weight: 800;
  color: $secondary-color;
}

.section-premium-card__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: $width-list;
  margin-bottom: 69px;
}

.section-premium-card__benefit {
  max-width: 127px;
  margin-bottom: 36px;
}

.section-premium-card__benefit:nth-child(2n - 1) {
  max-width: 115px;
  margin-right: 42px;
}
</style>
