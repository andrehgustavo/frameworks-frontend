import React, { Component } from 'react'

/**
 * Componente temporizador Timer.js, adaptado para este projeto. Retirado da url:
 * 
 * https://gist.githubusercontent.com/Cparusso/62864e192adec3e88619c6396e61d922/raw/cedb4e7046f9e9cb5bcb9e83b8b66160a57e0077/Timer.js
 */
export default class Timer extends Component {
    state = {
        seconds: this.props.seconds
    }

    componentDidMount() {

           this.myInterval = setInterval(() => {
            
            const { seconds } = this.state
            if(this.props.resetTime) {
                this.setState({                    
                    seconds : this.props.seconds
                })
                
                this.props.stopResetTime()
            }

            if (seconds > 0) {

                this.setState(({ seconds }) => ({

                    seconds: seconds - 1
                }))
            }

            if (seconds === 0) {
                this.props.timeOver()
                clearInterval(this.myInterval)
            } 

            }, 1000)
    }

    componentWillUnmount() {

        clearInterval(this.myInterval)
    }

    render() {
        const { seconds } = this.state        
        return (
            <div id="countdown">
                {                
                    seconds === 0
                        ? <h1>Game Over!</h1>
                        : <h1>Time Remaining: {seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}