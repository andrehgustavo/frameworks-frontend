import React from 'react';
import Screen from './Screen';
import Results from './Results';
import '../assets/css/game-style.css';
let playerHits= 0;
let previousResetTime = true;
class Game extends React.Component {
    /**
     * showResults - booleano - quando for positivo, o jogo mudará para a tela de resultados.
     * rightColor - Cor certa que está sendo mostrada em tela.
     * resetTime - booleano - será positivo quando o jogador acertar uma cor, fazendo que o tempo seja reiniciado.
     */
    state = {
        showResults: false,
        rightColor: '',
        resetTime: false
    };

    /**
     * Sentenças que aparacerão na tela do usuário, onde cada uma contem contem uma palavra que é o nome
     * de uma cor e o conjunto de opções para escolher dentro de botões
     */
    sentences = [
        {
            colorName: 'BLUE',
            colorNumber: "#0000FF"
        },
        {
            colorName: 'GREEN',
            colorNumber: "#7FFF00"
        },
        {
            colorName: 'YELLOW',
            colorNumber: "#FFD700"
        },
        {
            colorName: 'PURPLE',
            colorNumber: "#4B0082"
        },
        {
            colorName: "WHITE",
            colorNumber: "#F8F8FF"
        },
        {
            colorName: 'GREY',
            colorNumber: "#696969"
        },
        {
            colorName: 'ORANGE',
            colorNumber: "#FF8C00"
        },
        {
            colorName: 'RED',
            colorNumber: "#FF0000"
        },
        {
            colorName: 'PINK',
            colorNumber: "#FF1493"
        }
    ]
    random = 2;
    options = ['RED', 'YELLOW', 'BLUE', 'GREEN', 'PURPLE', 'WHITE', 'GREY', 'ORANGE', 'PINK']

    /**
     * Método para parar o acréscimo de tempo ao acertar uma sentença
     */
    stopResetTime = () => {
        this.setState({
            resetTime: false
        })
    }

    /**
     * Método chamado ao apertar um botão de opção, se acertar o usuário ganha tempo, +1 ponto de acerto
     * e mostrará a próxima sentença. Caso contrário, a tela de de final de resultados é mostrada
     * @param {*} rightColor Cor da Opção Correta
     * @param {*} userOption Opção que o Usuário resolveu clicar
     */
    next = (rightColor, userOption) => {
        if (rightColor.colorName === userOption) {
            playerHits++;
            this.setState({
                resetTime: true
            })
            previousResetTime = !this.state.resetTime;
        }
        else {
            this.setState({
                showResults: true,
                rightColor: rightColor
            })
        }
    }
    /** 
     * Método chamado para escolher um número aleatório com base no número de cores do jogo.
     */
    randomNumber = () => {
        return Math.floor(Math.random() * this.sentences.length)
    }
    /**
     * Método chamado assim que o temporizador chegar a zero. Mostra a tela de resultados
     * @param {*} rightColor 
     */
    timeOver = (rightColor) => {
        this.setState({
            showResults: true,
            rightColor: rightColor
        })
    }
    /**
     * Método para "embaralhar" arrays
     * @param {*} array 
     */
    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(previousResetTime != this.state.resetTime){
            this.options = this.shuffle(this.options)
            this.sentences = this.shuffle(this.sentences)
            this.random = this.randomNumber()
        }
    }
    componentDidMount() {
        this.options = this.shuffle(this.options)
        this.sentences = this.shuffle(this.sentences)
        this.random = this.randomNumber()
    }


    render() {
        //Constante que armazena o que será mostrado na tela, se o game continua ou se já acabou
        return (
            <div>
                
                {this.state.showResults ?
                    <Results
                        rightColor={this.state.rightColor}
                        playerHits={playerHits}/>
                    :
                    <Screen
                        currentRightcolor={this.sentences[this.random]}
                        currentOptions={this.options}
                        displayedColorName={this.sentences[0]}
                        stopResetTime={this.stopResetTime}
                        nextFunction={this.next}
                        timeOver={this.timeOver}
                        resetTime={this.state.resetTime}/>
                    }
            </div>
        );
    }
}

export default Game;