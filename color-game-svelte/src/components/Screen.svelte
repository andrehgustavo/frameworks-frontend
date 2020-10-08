<script>
    export let options;
    export let rightColor;
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
</script>

<h1 style="color: {rightColor.colorNumber}">{options[0]}</h1>

{#each options as option, index (option)}
    <button class="colorful-button" on:click={dispatch('userOption', index)}>{option}</button>
{/each}
