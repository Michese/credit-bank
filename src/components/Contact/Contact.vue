<template>
  <div class="contact">
    <span class="contact__location"><slot></slot></span>
    <a :href="parsePhone" class="contact__phone">{{ phone }}</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
@Options({
  props: {
    phone: String
  },
  computed: {
    parsePhone() {
      return `tel:${this.phone.replace(/^8/, "+7").replace(/\s/gi, "")}`
    }
  }
})
export default class Contact extends Vue {}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.contact {
  display: flex;
  flex-direction: column;
}

.contact__location {
  font-size: 1em;
  line-height: 1.857em;
  color: $secondary-color;
}

.contact__phone {
  font-size: 1.714em;
  line-height: 1em;
  color: $fourth-color;
}

.contact__phone:hover {
  color: $main-color;
}
</style>
