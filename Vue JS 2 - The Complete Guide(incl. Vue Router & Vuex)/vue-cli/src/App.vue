<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent= 'appQuote'">Quote</button>
        <button @click="selectedComponent= 'appAuthor'">Author</button>
        <button @click="selectedComponent= 'appNew'">New</button>
        <hr>
        <p>{{selectedComponent}}</p>
        <component :is="selectedComponent">
          <p>Default Content</p>
        </component>
        <!-- <app-quote quote="'A wonderful quote!''">
          <h2 slot="title">{{quoteTitle}}</h2>
          <p>A wonderful Quote</p>
        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote";
import Author from "./components/Author";
import New from "./components/New";

export default {
  data: function() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style scoped>
/* doesn't pass in */
/* h2 {
  color: red;
} */
</style>
