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
            colorNumber: "#FFD700" ,
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
            correctAnswersNumber: 0,
            correctWrongAnswer: '',
            currentAskIndex: 0,
            isToAddTime: false
        }
    }

    /**
     * Método para parar o acréscimo de tempo ao acertar uma sentença
     */
    stopAddTime = () => {
        
        this.setState({
            isToAddTime: false
        })
    }

    /**
     * Método chamado ao apertar um botão de opção, se acertar o usuário ganha tempo, +1 ponto de acerto
     * e mostrará a próxima sentença. Caso contrário, a tela de de final de resultados é msotrada
     * @param {*} color Cor da Opção Correta, option Opção que o Usuário resolveu clicar
     */
    next = (color, option) => {

        if(color.colorName === option) {
                
            if(this.state.currentAskIndex < this.sentences.length-1) {

                this.setState({
                    
                    correctAnswersNumber: this.state.correctAnswersNumber + 1,
                    currentAskIndex: Math.floor(Math.random() * 9),
                    isToAddTime: true
                })
            }

            else {

                this.setState({

                    correctAnswersNumber: this.state.correctAnswersNumber + 1,
                    currentAskIndex: 0,
                    isToAddTime: true
                })
            }
        }

        else {

            this.setState({

                showResults: true,
                correctWrongAnswer: color.colorName
            })
        }
    }

    /**
     * Método chamado assim que o temporizador chegar a zero. Mostra a tela de resultados
     * @param {*} color 
     */
    timeOver = (color) => {

        this.setState({
            showResults: true,
            correctWrongAnswer: color.colorName
        })
    }

    render() {

        //Constante que armazena o que será mostrado na tela, se o game continua ou se já acabou
        const showResultsOrScreen = this.state.showResults ? 
        <Results 
            correctWrongAnswer={this.state.correctWrongAnswer} 
            correctAnswersNumber={this.state.correctAnswersNumber}>
        </Results> : 
        <Screen 
            currentAsk={this.sentences[this.state.currentAskIndex]}
            stopAddTime={this.stopAddTime} 
            nextFunction={this.next}
            timeOver={this.timeOver}
            isToAddTime={this.state.isToAddTime}>
        </Screen>


        return (
            
            <div>
                {showResultsOrScreen}            
                
            </div>
        );
    }
}

export default Game;