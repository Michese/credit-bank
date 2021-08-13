<template>
  <div class="d-flex flex-column">
    <span class="nerin"><slot></slot></span>
    <a :href="parsePhone" class="light-gray-link">{{ phone }}</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'Contact',
})
export default class Contact extends Vue {
  @Prop({
    require: true,
  })
  private phone!: string;

  get parsePhone(): string {
    return `tel:${this.phone.replace(/^8/, '+7').replace(/\s/gi, '')}`;
  }
}
</script>

<style lang="scss"></style>
