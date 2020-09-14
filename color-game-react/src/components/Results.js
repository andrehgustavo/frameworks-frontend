import React from 'react';

function Results(props) {

    /**
     * Função para reiniciar a aplicação
     */
    function refreshPage() {
        window.location.reload(false);
      }

    return(
        
        <div>
            <div>
                <h3>The right answer is: <span style={{color: props.correctWrongAnswer.toLowerCase()}}>{props.correctWrongAnswer}</span></h3>
                <h3>Hits: {props.correctAnswersNumber}</h3>                
            </div>
            <div>
                <button onClick={refreshPage}>Reiniciar o jogo</button>
            </div>
        </div>
    )

}

export default Results;