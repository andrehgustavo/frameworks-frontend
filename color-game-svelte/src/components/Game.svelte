<script>
    import Results from "./Results.svelte";
    import Screen from "./Screen.svelte";
    import Timer from "./Timer.svelte";

    let showResults = false;
    let rightColor = "";
    let resetTime = false;
    let hasTime = true;
    let playerHits = 0;
    let sentences = [
        {
            colorName: "BLUE",
            colorNumber: "#0000FF",
        },
        {
            colorName: "GREEN",
            colorNumber: "#7FFF00",
        },
        {
            colorName: "YELLOW",
            colorNumber: "#FFD700",
        },
        {
            colorName: "PURPLE",
            colorNumber: "#4B0082",
        },
        {
            colorName: "WHITE",
            colorNumber: "#F8F8FF",
        },
        {
            colorName: "GREY",
            colorNumber: "#696969",
        },
        {
            colorName: "ORANGE",
            colorNumber: "#FF8C00",
        },
        {
            colorName: "RED",
            colorNumber: "#FF0000",
        },
        {
            colorName: "PINK",
            colorNumber: "#FF1493",
        },
    ];
    let options = [
        "RED",
        "YELLOW",
        "BLUE",
        "GREEN",
        "PURPLE",
        "WHITE",
        "GREY",
        "ORANGE",
        "PINK",
    ];

    /**
     * Método chamado para escolher um número aleatório com base no número de cores do jogo.
     */
    function randomNumber() {
        return Math.floor(Math.random() * sentences.length);
    }

    /**
     * Método para "embaralhar" arrays
     * @param {*} array
     */
    function shuffle(array) {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function next(event) {
        if (rightColor.colorName === options[event.detail]) {
            playerHits++;
            shuffleAll();
            resetTime = true;
        } else {
            showResults = true;
        }
    }

    function shuffleAll() {
        rightColor = sentences[randomNumber()];
        sentences = shuffle(sentences);
        options = shuffle(options);
    }

    function timeIsOver(){
        hasTime=false;
    }

    function stopResetTime(){
        resetTime=false;
    }

    shuffleAll();
</script>

{#if showResults || !hasTime}
    <Results {rightColor} {playerHits}/>
{:else}
    <Screen {options} {rightColor} on:userOption={next} />
    <Timer {resetTime} on:noTime={timeIsOver} on:stop={stopResetTime}/>
{/if}

