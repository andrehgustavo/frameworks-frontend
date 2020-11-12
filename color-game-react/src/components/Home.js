import React from 'react';
import Game from './Game';
import PlayerForm from './PlayerForm';
import '../assets/css/game-style.css';
let time = 0;


class Home extends React.Component {

    state = {
        startGame: false,
    };


    startNewGame = (value) => {
        this.time = value;
        console.log(time)
        this.setState({
            startGame: true
        })
    }



    render() {
        //Constante que armazena o que será mostrado na tela, se o game continua ou se já acabou
        return (
            <div>

                {this.state.startGame ?
                    <Game
                        difficulty={this.time} />
                    :
                    <div>

                        <div>
                            <h1>The Stroop Effect Game</h1>
                        </div>
                        <div className="rowCard">
                            
                            <div className="rowCard50">
                                <figure className="container-img">
                                    <section id="cerebro-image">
                                        <img src={require("../assets/images/cerebro.png")} alt="colored brain" />
                                    </section>
                                </figure>
                            </div>
                            
                            <div className="rowCard50">
                                <div className="card">
                                    <div className="card-text">
                                        The Stroop effect is related to selective attention, which
                                        is the ability to respond to certain environmental stimuli
                                        while ignoring others.
                                        <br />
                                        <br />
                                        For example, when a word like
                                        <span style={{ color: 'red' }}> blue </span>,
                                        <span style={{ color: 'blue' }}> green </span>
                                        or
                                        <span style={{ color: 'green' }}> red </span>
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
                        <PlayerForm></PlayerForm>
                        <div>
                            <button className="colorful-button" onClick={() => this.startNewGame(12)}>EASY</button>
                            <button className="colorful-button" onClick={() => this.startNewGame(8)}>MEDIUM</button>
                            <button className="colorful-button" onClick={() => this.startNewGame(5)}>HARD</button>
                        </div>                     
                        
                    </div>                  


                }
            </div>
        );
    }
}

export default Home;