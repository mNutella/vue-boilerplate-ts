<template lang="pug">
  Layout
    h1 Home Page
    img(src="@assets/images/logo.png" alt="Logo")
    ul
      li(v-for="walk in walks" :key="walk.id") {{walk.distance}}
    p(v-if="walk.error") Something wrong
</template>

<script lang="ts">
import Vue from "vue";
import { State, Action, Getter } from "vuex-class";
import { Component } from "vue-property-decorator";
import { WalkState, Walk } from "@types";

import Layout from "@layouts/Main";
const namespace: string = "walk";

@Component({
  components: {
    Layout
  }
})
export default class Home extends Vue {
  @State("walk") walk!: WalkState;
  @Action("fetchWalks", { namespace }) fetchWalks: any;
  @Getter("allWalks", { namespace }) walks!: Walk[];

  mounted() {
    // fetching data as soon as the component's been mounted
    this.fetchWalks();
  }
}
</script>

<style lang="sass" module>
</style>
