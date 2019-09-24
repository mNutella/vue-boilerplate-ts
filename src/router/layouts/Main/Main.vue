<template lang="pug">
  .container
    Navbar
    slot
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import Navbar from "@components/Navbar";

@Component({
  components: {
    Navbar
  }
})
export default class Main extends Vue {}
</script>

<style lang="sass" module>
  @import '@design'

  .container
    min-width: $size-content-width-min
    max-width: $size-content-width-max
    margin: 0 auto
</style>