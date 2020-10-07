<script>
    export let options;
    export let rightColor;
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
</script>

<h2 style="color: {rightColor.colorNumber}">{options[0]}</h2>

{#each options as option, index (option)}
    <button on:click={dispatch('userOption', index)}>{option}</button>
{/each}
