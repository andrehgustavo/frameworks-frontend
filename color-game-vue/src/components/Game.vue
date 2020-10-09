<template>
  <div>
    <!--  * If there is time, the component is rendered
          * rightColor: the correct color is passed 
          * options: All colors are passed
    * @selection: A method that uses what is passed from the component-->
    <Screen
      v-if="time"
      :rightColor="sentences[randomNumber(currentColor)].colorNumber"
      :options="options"
      @selection="onSelection($event)"
    ></Screen>
    <br />
    <!--  * The component key is used to re-render the component Timer, every time  
            that componentKey has change, the component are re-render
          * addTime - Boolean to verificate if has time
    * Method to use the return of Timer if there is time.-->
    <Timer :key="componentKey" :addTime="time" :seconds="difficulty" @timeIsOver="hasTime"></Timer>

    <!--  * If showResults, the Results component is rendered
          * playerHits: the player's hit are passed 
    * rightColor: the correct color is passed-->
    <Results
      v-if="showResults"
      :playerHits="playerHits"
      :rightColor="sentences[currentColor]"
    ></Results>
  </div>
</template>

<script>
import Screen from "./Screen.vue";
import Results from "./Results.vue";
import Timer from "./Timer.vue";
export default {
  name: "Game",
  components: {
    Screen,
    Results,
    Timer,
  },
  props: ['difficulty'],  
  data: () => {
    return {

      
      /**
       * Sentences of color that will appear on the user's screen, where each contains a name's color.
       */
      sentences: [
        {
          colorName: "BLUE",
          colorNumber: "#0000FF"
        },
        {
          colorName: "GREEN",
          colorNumber: "#7FFF00"
        },
        {
          colorName: "YELLOW",
          colorNumber: "#FFD700"          
        },
        {
          colorName: "PURPLE",
          colorNumber: "#4B0082"
        },
        {
          colorName: "WHITE",
          colorNumber: "#F8F8FF"
        },
        {
          colorName: "GREY",
          colorNumber: "#696969"
        },
        {
          colorName: "ORANGE",
          colorNumber: "#FF8C00"
        },
        {
          colorName: "RED",
          colorNumber: "#FF0000"
        },
        {
          colorName: "PINK",
          colorNumber: "#FF1493"
        },
      ],
      componentKey: 0,
      currentColor: 0,
      showResults: false,
      playerHits: 0,
      time: true,
      options: [
        "RED",
        "YELLOW",
        "BLUE",
        "GREEN",
        "PURPLE",
        "WHITE",
        "GREY",
        "ORANGE",
        "PINK",
      ],
      answers: [],
    };
  },
  methods: {
    /** Method to force redenrization  */
    forceRerender() {
      this.componentKey += 1;
      console.log("componentKey: " + this.componentKey);
    },
    /** Method called when a color button is pressed, if the choice is right
     * the player hits are incremented and the method forceRerender() are called.
     * @param {*} option - the player's color choice
     */
    onSelection: function (option) {
      if (this.sentences[this.currentColor].colorName == option) {
        this.time = true;
        this.playerHits++;
        this.forceRerender();
      } else {
        this.time = false;
        this.showResults = true;
      }
    },
    /** Method called when the time's ended.
     * @param {*} option - a boolean if time is ended.
     */
    hasTime: function (option) {
      this.showResults = option;
      this.time = false;
    },
    /** Method called to choose a random number based on the number of colors in the game.
     * @param {*} number - the current position of the color in the array (sentences).
     */
    randomNumber: function (number) {
      number = Math.floor(Math.random() * this.sentences.length);
      this.currentColor = number;
      return number;
    },
  },
};
</script>

<style>
</style>