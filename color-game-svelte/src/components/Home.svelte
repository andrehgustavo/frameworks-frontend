<script>
    import Game from "./Game.svelte";
    import PlayerForm from "./PlayerForm.svelte";

    let startGame = false;
    let player = {};
    let src = "./images/cerebro.png";

    function startNewGame(value) {
        startGame = true;
    }

    function sendForm(values) {
        player = values.detail
        console.log("recebendo em home ", player)
        startNewGame()
    }

</script>

{#if startGame}
    <Game 
        difficulty = {player.level}
        playername = {player.playername}
    />
{:else}
    <div>
        <h1>The Stroop Effect Game</h1>
    </div>
    <div class="rowCard">
        <div class="rowCard50">
            <figure class="container-img">
                <section id="cerebro-image">
                    <img {src} alt="colored brain" />
                </section>
            </figure>
        </div>
        <div class="rowCard50">
            <div class="card">
                <div class="card-text">
                    The Stroop effect is related to selective attention, which
                    is the ability to respond to certain environmental stimuli
                    while ignoring others.
                    <br />
                    <br />
                    For example, when a word like
                    <span style="color: red"> blue </span>,
                    <span style="color: blue"> green </span>
                    or
                    <span style="color: green"> red </span>
                    is printed in a color that differs from the color expressed
                    by the meaning semantic, there is a delay in processing the
                    word color, causing slower reaction times and an increase in
                    errors.
                    <br />
                    <br />
                    Therefore, the stroop effect reveals the degree of
                    time that people have to say the name of the color
                    with which the word is painted, instead of the real word.
                </div>
            </div>
        </div>
    </div>
    <div>
        <PlayerForm 
            player={player} 
            on:update={sendForm} 
        />
    </div>
{/if}
