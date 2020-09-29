import React from 'react';
import Screen from './Screen';
import Results from './Results';
import '../assets/css/game-style.css';

class Game extends React.Component {

    /**
     * Sentenças que aparacerão na tela do usuário, onde cada uma contem contem uma palavra que é o nome
     * de uma cor e o conjunto de opções para escolher dentro de botões
     */
    sentences = [
        {
            colorName: 'BLUE',
            colorNumber: "#0000FF",
            options: ['RED', 'YELLOW', 'BLUE', 'GREEN', 'PURPLE', 'WHITE', 'GREY', 'ORANGE', 'PINK']
        },
        {
            colorName: 'GREEN',
            colorNumber: "#7FFF00",
            options: ['RED', 'YELLOW', 'BLUE', 'GREEN', 'PURPLE', 'WHITE', 'GREY', 'ORANGE', 'PINK']
        },
        {
            colorName: 'YELLOW',
            colorNumber: "#FFD700",
            options: ['RED', 'YELLOW', 'BLUE', 'GREEN', 'PURPLE', 'WHITE', 'GREY', 'ORANGE', 'PINK']
        },
        {
            colorName: 'PURPLE',
            colorNumber: "#4B0082",
            options: ['RED', 'YELLOW', 'BLUE', 'GREEN', 'PURPLE', 'WHITE', 'GREY', 'ORANGE', 'PINK']
        },
        {
            colorName: "WHITE",
            colorNumber: "#F8F8FF",
            options: ['RED', 'YELLOW', 'BLUE', 'GREEN', 'PURPLE', 'WHITE', 'GREY', 'ORANGE', 'PINK']
        },
        {
            colorName: 'GREY',
            colorNumber: "#696969",
            options: ['RED', 'YELLOW', 'BLUE', 'GREEN', 'PURPLE', 'WHITE', 'GREY', 'ORANGE', 'PINK']
        },
        {
            colorName: 'ORANGE',
            colorNumber: "#FF8C00",
            options: ['RED', 'YELLOW', 'BLUE', 'GREEN', 'PURPLE', 'WHITE', 'GREY', 'ORANGE', 'PINK']
        },
        {
            colorName: 'RED',
            colorNumber: "#FF0000",
            options: ['RED', 'YELLOW', 'BLUE', 'GREEN', 'PURPLE', 'WHITE', 'GREY', 'ORANGE', 'PINK']
        },
        {
            colorName: 'PINK',
            colorNumber: "#FF1493",
            options: ['RED', 'YELLOW', 'BLUE', 'GREEN', 'PURPLE', 'WHITE', 'GREY', 'ORANGE', 'PINK']
        }
    ]
    constructor(props) {
        super(props)
        this.state = {
            showResults: false,
            playerHits: 0,
            rightColor: '',
            currentColor: 0,
            hasTime: true
        }
    }

    /**
     * Método para parar o acréscimo de tempo ao acertar uma sentença
     */
    stopAddTime = () => {
        this.setState({
            hasTime: false
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
            this.setState({
                playerHits: this.state.playerHits + 1,
                hasTime: true
            })
        }
        else {
            this.setState({
                showResults: true,
                rightColor: rightColor
            })
        }
    }
    /** Método chamado para escolher um número aleatório com base no número de cores do jogo.
     * @param {*} número - a posição atual da cor na matriz (frases).
     */
    randomNumber = (number) => {
        number = Math.floor(Math.random() * this.sentences.length);
        this.currentColor = number;
        return number;
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
    
    render() {
        console.log(this.state.currentColor)
        //Constante que armazena o que será mostrado na tela, se o game continua ou se já acabou
        const showResultsOrScreen = this.state.showResults ?
            <Results
                rightColor={this.state.rightColor}
                playerHits={this.state.playerHits}>
            </Results> :
            <Screen
                currentAsk={this.sentences[this.randomNumber(this.state.currentColor)]}
                stopAddTime={this.stopAddTime}
                nextFunction={this.next}
                timeOver={this.timeOver}
                hasTime={this.state.hasTime}>
            </Screen>
        return (
            <div>
                {showResultsOrScreen}
            </div>
        );
    }
}

export default Game;