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
                <h2>GameOver {props.playerName}! </h2>
                <h3>The right answer is: <span style={{color: props.rightColor.colorNumber}}>{props.rightColor.colorName}</span></h3>
                <h2>Hits: {props.playerHits}</h2>                
            </div>
            <div>
                <button className="colorful-button" onClick={refreshPage}>Restart Game</button>
            </div>
        </div>
    )

}

export default Results;