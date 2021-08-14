<template>
  <transition name="menu">
    <section v-if="menuIsOpen" class="menu p-fixed overflow-x-hidden z-index-5" @click.stop>
      <button type="button" class="btn-close d-block d-lg-none mb-20" @click="closeMenu" />
      <nav>
        <ul>
          <li
            class="mb-20 white-link"
            v-for="(item, index) in [
              { link: '#section-advantages', text: 'Какие преимущества' },
              { link: '#section-care', text: 'Что вы получаете' },
              { link: '#section-assistant', text: 'Еще сюрпризы' },
              { link: '#section-travel-card', text: 'Оформить карту' },
            ]"
            :key="item.link + index"
          >
            <a :href="item.link" @click="closeMenu">{{ item.text }}</a>
          </li>
        </ul>
      </nav>

      <div class="menu__contacts">
        <contact class="menu__contact" phone="8 800 950 6570"> По России </contact>
        <contact class="menu__contact" phone="8 800 950 6570"> По Миру </contact>
      </div>
    </section>
  </transition>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';
import Contact from '@/components/Contact/Contact.vue';
import MenuToggle from '@/components/MenuToggle/MenuToggle.vue';

@Options({
  name: 'Menu',
  components: {
    Contact,
    MenuToggle,
  },
})
export default class Menu extends Vue {
  @Prop({
    require: true,
  })
  private menuIsOpen!: boolean;
  @Emit() closeMenu(): void {
    return void 0;
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables/media';
.menu {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 40px;
  background-color: var(--lightBlack-color);
  &__contact:not(:last-child) {
    margin-bottom: 30px;
  }
}

@media screen and (min-width: $lg) {
  .menu {
    right: unset;
    max-width: calc(var(--max-width-menu) + 2 * var(--padding-content-menu));
  }
}

@media screen and (min-height: 550px) and (min-width: 350px) {
  .menu {
    padding: var(--padding-content-menu);
    &__contacts {
      position: absolute;
      bottom: 90px;
    }
  }
}
</style>
