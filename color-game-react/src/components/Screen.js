import React from 'react';
import Timer from './Timer';


function Screen(props) {
    
    /**
     * Método para gerar botões clicáveis para cada uma das opções
     */
    const options = props.currentOptions.map(option => {
        return <button className="colorful-button"
            key={option}
            onClick= { () => props.nextFunction(props.currentRightcolor, option) }
        >{option}</button>
    })

/*     function changeColorScreen(params) {
      document.body.style.backgroundColor = props.currentRightcolor.colorNumber
    } */

    return (

        <div>
            <div>
                <h1 style={{color: props.currentRightcolor.colorNumber}}>{props.displayedColorName.colorName}</h1>
            </div>
            <div>
                {options}
            </div>
            <div>
                <Timer  timeOver={() => props.timeOver(props.currentRightcolor)} 
                        resetTime={props.resetTime} 
                        stopResetTime={props.stopResetTime} 
                        seconds = {props.difficulty}/>
            </div>
        </div>
    );

}

export default Screen;