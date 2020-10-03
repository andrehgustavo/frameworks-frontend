import React from 'react';
import Timer from './Timer';


function Screen(props) {
    
    /**
     * Método para gerar botões clicáveis para cada uma das opções
     */
    const options = props.currentOptions.map(option => {
        return <button
            key={option}
            onClick= { () => props.nextFunction(props.currentRightcolor, option) }
        >{option}</button>
    })


    return (

        <div>
            <div>
                <h2 style={{color: props.currentRightcolor.colorNumber}}>{props.displayedColorName.colorName}</h2>
            </div>
            <div>
                {options}
            </div>
            <div>
                <Timer timeOver={() => props.timeOver(props.currentRightcolor)} resetTime={props.resetTime} stopResetTime={props.stopResetTime} />
            </div>
        </div>
    );

}

export default Screen;