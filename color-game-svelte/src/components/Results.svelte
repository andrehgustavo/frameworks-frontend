<script>
    export let rightColor;
    export let playerHits;

    function refreshPage() {
        location.reload();
    }
</script>

<div>
    <div>
        <h2>GameOver</h2>
        <h3>
            The right answer is:
            <span
                style="color: {rightColor.colorNumber}">{rightColor.colorName}</span>
        </h3>
        <h2>Hits: {playerHits}</h2>
    </div>
    <div><button class="colorful-button" on:click={refreshPage}>Reiniciar o jogo</button></div>
</div>
