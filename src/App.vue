<template lang="pug">
  div
    router-view(:key="$route.fullPath")
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="sass">
  @import '@design'

  *,
  *::before,
  *::after
    box-sizing: border-box

  body
    background: $color-body-bg
  #app
    @extend %typography-small

  // ===
  // Base element styles
  // ===

  a,
  a:visited
    color: $color-link-text

  h1
    @extend %typography-xxlarge

  h2
    @extend %typography-xlarge

  h3
    @extend %typography-large

  h4
    @extend %typography-medium

  h5,
  h6
    @extend %typography-small
</style>