<template>
  <span>
    <input
      class="switcher-card d-none"
      type="radio"
      :name="name"
      :id="card.id"
      :checked="changed"
      @change.prevent="changeSwitcher"
    />
    <label :for="card.id" class="switcher-card__label maria c-pointer">
      {{ card.label }}
    </label>
  </span>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import { TSwitcherCard } from '@/types/SwitcherCard';

@Options({
  name: 'SwitcherCard',
})
export default class SwitcherCard extends Vue {
  @Prop({
    require: true,
  })
  private card!: TSwitcherCard;
  @Prop({
    require: false,
    default: () => false,
  })
  private changed!: boolean;
  @Prop({
    require: true,
  })
  private name!: string;
  @Emit() changeSwitcher(): void {
    return void 0;
  }
}
</script>

<style lang="scss" scoped>
.switcher-card {
  &:checked + &__label {
    color: var(--peru-color);
  }

  &:hover + &__label {
    text-shadow: 0 0 0.5em currentColor;
  }
}
</style>
