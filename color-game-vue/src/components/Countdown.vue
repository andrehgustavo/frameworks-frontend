<template>
    <div>
        
        <h2 v-if = "timerCount == 0" > GameOver {{timeIsOver()}} </h2>
        <h2 v-else-if = "!addTime" > GameOver {{timeIsOver()}} </h2>
        <h2 v-else>Countdown: {{ timerCount }} </h2>
        
    </div>
</template>

<script>
export default {
    name: "Countdown",
    props: ["addTime"],
    data() {
            return {
                timerCount : 5
            }
    },
    methods: {
        timeIsOver: function() {
            console.log("O tempo acabou");
            this.$emit('timeIsOver', true);
        },
        countDownTimer() {
            if(this.timerCount > 0) {
                setTimeout(() => {
                    this.timerCount -= 1
                    this.countDownTimer()
                }, 1000)
            }
        },
    },
    created() {
        this.countDownTimer()
    }
}
</script>