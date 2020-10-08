<div>
    {#if seconds === 0} 
        <h1>GameOver</h1>
    {:else} 
        <h1>Time Remaining: {seconds < 10 ? `0${seconds}` : seconds}</h1>
    {/if}
</div>

<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte'

    const dispatcher = createEventDispatcher()

    export let resetTime;
    let seconds = 5


    onMount(() => {
		const interval = setInterval(() => {
            if (resetTime) {
                seconds = 5;
                resetTime = false;
                dispatcher('stop', true)
            }
            if (seconds > 0) {
                seconds = seconds - 1;
            }else{
                dispatcher('noTime', true)
                clearInterval(interval);
            }			
        }, 1000)
    });
    


</script>
