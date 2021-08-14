<template>
  <section class="section-assistant section-margin w-100 mt-lg-0" id="section-assistant">
    <header class="ph-10 m-auto mb-60 text-center">
      <h3 class="mb-10 section-caption">Персональный помощник</h3>
      <span class="clonia white-color">
        Бесплатно для владельцев
        <span class="peru-color">CARD PLUS</span>
      </span>
    </header>
    <main class="section-assistant__inner pb-30 pb-lg-160">
      <div class="section-assistant__container d-flex justify-center justify-lg-end align-center ph-10 m-auto">
        <transition-group
          name="list-from-left"
          tag="ul"
          class="section-assistant__list"
          v-scrollanimation="onScrollList"
        >
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
            :key="item.class + index"
            v-show="showList"
            class="section-assistant__item d-flex align-center menippe white-color"
            :class="item.class"
          >
            {{ item.text }}
          </li>
        </transition-group>
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'SectionAssistant',
})
export default class SectionAssistant extends Vue {
  showList = false;
  onScrollList(): void {
    this.showList = true;
  }
}
</script>

<style lang="scss">
@import 'src/styles/variables/media';

.section-assistant {
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
