<template>
  <div>
    <h1> Let's go {{ playername }} </h1>
    <h1 :style="{color: rightColor}">{{ shuffle(options)[0] }}</h1>
    <button class="colorful-button" v-for="opt in shuffle(options)" :key="opt" @click="selected(opt)">{{ opt }}</button>
  </div>
</template>

<script>
export default {
  name: "Screen",
  props: ["rightColor", "options", 'playername'],
  methods: {
    selected: function(option) {
      console.log("você clicou em ", option);
      this.$emit("selection", option);
    },
    shuffle: function(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
  }
};
</script>

<style>
</style>