import React from 'react';
import Timer from './Timer';


function Screen(props) {
     
    /**
     * Método para "embaralhar" arrays
     * @param {*} array 
     */
    function shuffle(array) {
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

    /**
     * Constante que armazena nomes das cores, onde uma irá ser escolhida 
     * e responsável pela cor da palavra da sentença, esta que será a opção correta
     * da sentença renderizada na tela do usuário
     */
    const colors = [{
        colorName: "BLUE",
        colorNumber: "#0000FF"
      },
      {
        colorName: "GREEN",
        colorNumber: "#7FFF00"
      },
      {
        colorName: "YELLOW",
        colorNumber: "#FFD700"          
      },
      {
        colorName: "PURPLE",
        colorNumber: "#4B0082"
      },
      {
        colorName: "WHITE",
        colorNumber: "#F8F8FF"
      },
      {
        colorName: "GREY",
        colorNumber: "#696969"
      },
      {
        colorName: "ORANGE",
        colorNumber: "#FF8C00"
      },
      {
        colorName: "RED",
        colorNumber: "#FF0000"
      },
      {
        colorName: "PINK",
        colorNumber: "#FF1493"
      },
    ]
    
    /**
     * Método para gerar botões clicáveis para cada uma das opções
     */
    const options = props.currentAsk.options.map(option => {
        return <button
            key={option}
            onClick= { () => props.nextFunction(colors[0], option) }
        >{option}</button>
    })

    
    shuffle(colors)  
    shuffle(options)

    return (

        <div>
            <div>
                <h2 style={{color: colors[0].colorNumber}}>{props.currentAsk.colorName}</h2>
            </div>
            <div>
                {options}
            </div> 
            <div>
                <Timer timeOver={() => props.timeOver(colors[0])} resetTime={props.resetTime} stopResetTime={props.stopResetTime} />
            </div>
        </div>
    );

}

export default Screen;