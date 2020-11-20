<template>
    <div>
        
        <h2 v-if = "timerCount == 0" >  {{timeIsOver()}} </h2>
        <h2 v-else-if = "!addTime" >  {{timeIsOver()}} </h2>
        <h2 v-else>Time Remaining: {{ timerCount }} </h2>
        
    </div>
</template>

<script>
export default {
    name: "Timer",
    props: ["addTime", "seconds"],
    data() {
            return {
                timerCount : this.seconds
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