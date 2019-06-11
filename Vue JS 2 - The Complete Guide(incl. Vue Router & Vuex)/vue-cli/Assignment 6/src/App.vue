<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <app-server-details></app-server-details>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import ServerDetails from "./ServerDetails.vue";
import Footer from "/Footer.vue";

export default {
  components: {
    "app-header": Header,
    "app-server-details": ServerDetails,
    "app-footer": Footer
  }
};
</script>

<style>
</style>
