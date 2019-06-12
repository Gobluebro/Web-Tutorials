<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{switchName()}}</p>
    <button @click="resetName()">Reset Name</button>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
export default {
  props: {
    myName: {
      type: String,
      //   required: true,
      default: "Griffin"
    },
    resetFn: Function
  },
  methods: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.myName = "Griffin";
      // this allows us to emit a custom event, so we can pass name to the parent
      this.$emit("nameWasReset", this.myName);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
