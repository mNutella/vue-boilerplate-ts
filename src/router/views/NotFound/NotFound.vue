<template lang="pug">
  Layout
    h1.title 404
      template(v-if="resource") {{ resource }}
    p Not Found
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import Layout from "@layouts/Main";

@Component({
  components: {
    Layout
  }
})
export default class NotFound extends Vue {
  @Prop(String) readonly resource!: string;
}
</script>

<style lang="sass" module>
  .title
    text-align: center;
</style>
