<template>
  <div>
    <h3>The right answer is: <span :style="{color: rightColor.colorNumber}">{{rightColor.colorName}}</span></h3>
    <h2>You hit: {{playerHits}}</h2>

    <div>
      <button class="colorful-button" @click="refreshPage()">Restart Game</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Results',
    props: ['playerHits', 'rightColor'],
    methods: {
      refreshPage: function() {
        window.location.reload(false);
      }
    }
}
</script>

<style>
</style>