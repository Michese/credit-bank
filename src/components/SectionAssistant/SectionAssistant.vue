<template>
  <section class="section-assistant" id="section-assistant">
    <header class="section-assistant__heading">
      <section-caption class="section-assistant__section-caption">
        Персональный помощник
      </section-caption>
      <span class="section-assistant__desc">
        Бесплатно для владельцев
        <span class="section-assistant__marker">CARD PLUS</span>
      </span>
    </header>
    <main class="section-assistant__inner">
      <div class="section-assistant__container">
        <ul class="section-assistant__list">
          <li
            class="section-assistant__item section-assistant__item_img_message"
          >
            Организует встречи, найдет&nbsp;гидов и&nbsp;переводчиков
          </li>
          <li class="section-assistant__item section-assistant__item_img_map">
            Спланирует поездку по&nbsp;самым интересным местам вашего отдыха
          </li>
          <li
            class="section-assistant__item section-assistant__item_img_diamond"
          >
            Достанет билеты на&nbsp;мероприятия, даже если&nbsp;их уже нет
            в&nbsp;продаже
          </li>
          <li class="section-assistant__item section-assistant__item_img_glass">
            Закажет столик<br />в&nbsp;ресторане, клубе<br />или&nbsp;кафе
          </li>
        </ul>
      </div>
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
export default class SectionAssistant extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.section-assistant {
  padding: 2  * $header-padding-vertical + $logo-height 0 0;
}

.section-assistant__heading {
  text-align: center;
  max-width: 820px;
  padding: 0 10px;
  margin: 0 auto 60px;
}

.section-assistant__section-caption {
  margin-bottom: 0.4em;
}

.section-assistant__desc {
  font-size: 1em;
  line-height: 1.285em;
  font-weight: 700;
  color: $main-color;
}

.section-assistant__marker {
  text-transform: uppercase;
  color: $third-color;
}

.section-assistant__inner {
  padding-bottom: 160px;
  background: transparent url("./assets/assistant-bg.svg") no-repeat center
    center / contain;
}

.section-assistant__container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 551px;
  max-width: 820px;
  padding: 0 10px;
  margin: 0 auto;
}

.section-assistant__list {
  max-width: 261px;
}

.section-assistant__item {
  display: flex;
  align-items: center;
  line-height: 1.43em;
  font-weight: 700;
  color: $main-color;
}

.section-assistant__item:not(:last-child) {
  margin-bottom: 45px;
}

.section-assistant__item::before {
  min-width: 3.571em;
  margin-right: 1.2em;
  text-align: center;
}

.section-assistant__item_img_message::before {
  content: url("./assets/message.svg");
}

.section-assistant__item_img_map::before {
  content: url("./assets/map.svg");
}

.section-assistant__item_img_diamond::before {
  content: url("./assets/diamond.svg");
}

.section-assistant__item_img_glass::before {
  content: url("./assets/glass.svg");
}
</style>
