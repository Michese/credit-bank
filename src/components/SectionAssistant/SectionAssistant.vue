<template>
  <section class="section-assistant w-100 mt-lg-0" id="section-assistant">
    <header class="ph-10 m-auto mb-60 text-center">
      <h3 class="mb-10 section-caption">Персональный помощник</h3>
      <span class="clonia white-color">
        Бесплатно для владельцев
        <span class="peru-color">CARD PLUS</span>
      </span>
    </header>
    <main class="section-assistant__inner pb-30 pb-lg-160">
      <div class="section-assistant__container d-flex justify-center justify-lg-end align-center ph-10 m-auto">
        <ul class="section-assistant__list">
          <li
            v-for="(item, index) in [
              {
                text: 'Организует встречи, найдет&nbsp;гидов и&nbsp;переводчиков',
                class: 'section-assistant__item_img_message',
              },
              {
                text: 'Спланирует поездку по&nbsp;самым интересным местам вашего отдыха',
                class: 'section-assistant__item_img_map',
              },
              {
                text: 'Достанет билеты на&nbsp;мероприятия, даже если&nbsp;их уже нет в&nbsp;продаже',
                class: 'section-assistant__item_img_diamond',
              },
              {
                text: 'Закажет столик в&nbsp;ресторане, клубе или&nbsp;кафе',
                class: 'section-assistant__item_img_glass',
              },
            ]"
            class="section-assistant__item d-flex align-center menippe white-color"
            :class="item.class"
            :key="item.class + index"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'SectionAssistant',
})
export default class SectionAssistant extends Vue {}
</script>

<style lang="scss">
@import 'src/styles/variables/media';

.section-assistant {
  margin-top: calc(-2 * var(--header-padding-vertical));
  padding: calc(2 * var(--header-padding-vertical) + var(--logo-height)) 0 0;

  &__container {
    max-width: 820px;
  }

  &__list {
    max-width: 350px;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 45px;
    }

    &::before {
      min-width: 3.571em;
      margin-right: 1.2em;
      text-align: center;
    }

    @each $image in ('message', 'map', 'diamond', 'glass') {
      &_img_#{$image}:before {
        content: url('./assets/#{$image}.svg');
      }
    }
  }
}

@media screen and (min-width: $lg) {
  .section-assistant {
    &__inner {
      background: transparent url('./assets/assistant-bg.svg') no-repeat center center / contain;
    }

    &__container {
      min-height: 551px;
    }

    &__list {
      max-width: 261px;
    }
  }
}
</style>
