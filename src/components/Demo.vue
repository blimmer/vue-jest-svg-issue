<template>
  <div>
    <div>
      <button id="regular-button" @click="regularButtonCounter += 1">
        Regular Button
      </button>
      <span id="regular-button-counter"
        >Regular button clicked {{ regularButtonCounter }} times</span
      >
    </div>
    <div style="margin-top: 2em">
      <CloseIcon id="svg-button" @click="svgButtonCounter += 1" />
      <span id="svg-button-counter"
        >SVG button clicked {{ svgButtonCounter }} times</span
      >
    </div>
  </div>
</template>

<script>
import CloseIcon from "../assets/close-icon.svg";

export default {
  name: "Demo",
  components: {
    CloseIcon
  },
  data: function() {
    return { regularButtonCounter: 0, svgButtonCounter: 0 };
  }
};
</script>

<style scoped>
span {
  margin-left: 2em;
}
</style>
