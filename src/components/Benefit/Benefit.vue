<template>
  <div class="d-flex flex-column align-start">
    <strong>
      <span class="menippe peru-color">{{ before }}</span>
      <span class="pareia"><slot name="caption"></slot></span>
    </strong>
    <span class="menippe gray-color"><slot></slot></span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'Benefit',
})
export default class Benefit extends Vue {
  @Prop({
    require: false,
  })
  private before!: string;
}
</script>

<style lang="scss"></style>
