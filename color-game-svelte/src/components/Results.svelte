<script>
    export let rightColor;
    export let playerHits;
    export let playername;

    function refreshPage() {
        location.reload();
    }
</script>

<div>
    <div>
        <h2>GameOver {playername} </h2>
        <h3>
            The right answer is:
            <span
                style="color: {rightColor.colorNumber}">{rightColor.colorName}</span>
        </h3>
        <h2>Hits: {playerHits}</h2>
    </div>
    <div><button class="colorful-button" on:click={refreshPage}>Restart Game</button></div>
</div>
