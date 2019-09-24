<template lang="pug">
  ul
    li First
    li Second
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>

<style lang="sass" module>
  @import '@design'

  .navbar
</style>