import React from 'react'
import { requiredValidation, minLengthValidation } from '../forms/validations'
import '../assets/css/player-form.css';
import '../assets/css/game-style.css';

const validate = {
    playerName: (value) => minLengthValidation(3, value),
    nickname: requiredValidation,
    birthday: requiredValidation,
    email: requiredValidation
  }

export default class PlayerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: {
        playerName: props.player.playerName ,
        nickname: props.player.nickname ,
        birthday: props.player.birthday ,
        email: props.player.email ,
        level: props.player.level 
      },
      errors: {},
      touched: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  onChange(event) {
    const { name, value } = event.target
    this.setState((state) => ({
      ...state,
      player: { ...state.player, [name]: value },
      touched: { ...state.touched, [name]: true }
    }))
  }

  onBlur(event) {
    const { name, value } = event.target
    const { [name]: removedError, ...rest } = this.state.errors
    const error = validate[name] ? validate[name](value) : null
    const nameError = this.state.touched[name] ? error : null
    this.setState((state) => ({
      ...state,
      errors: {
        ...rest,
        [name]: nameError
      }
    }))
  }

  onSubmit(event) {
    event.preventDefault()
    const player = this.state.player
    //validando
    const validation = Object.keys(player).reduce((acc, key) => {
      const error = validate[key] && validate[key](player[key])
      return {
        errors: {
          ...acc.errors,
          ...(error && { [key]: error })
        },
        touched: {
          ...acc.touched,
          ...{ [key]: true }
        }
      }
    }, {})
    this.setState((state) => ({
      ...state,
      errors: validation.errors,
      touched: validation.touched
    }))

    const errorValues = Object.values(validation.errors)
    const touchedValues = Object.values(validation.touched)
    const errorsIsEmpty = errorValues.length === 0
    const touchedAll = touchedValues.length === Object.values(player).length
    const allTrue = touchedValues.every((t) => t === true)

    // se isso ocorrer, então pode atualizaros dados
    if (errorsIsEmpty && touchedAll && allTrue) {
      this.props.getSubmit(player)
    }
  }

  render() {
  
    return (
        <div className="form">
            <form onSubmit={this.onSubmit}>
                <div>
                    <input name="playerName" value={this.state.playerName} placeholder="Name" onChange={this.onChange} onBlur={this.onBlur}/>
                    <div className="error">{this.state.errors.playerName}</div>
                    <input name="nickname" value={this.state.nickname} placeholder="Nickname" onChange={this.onChange} onBlur={this.onBlur}/>
                    <div className="error">{this.state.errors.nickname}</div>
                </div>
                <div>
                  <input name="birthday" value={this.state.birthday} placeholder="Birthday" onChange={this.onChange} onBlur={this.onBlur}/>
                  <div className="error">{this.state.errors.birthday}</div>
                  <input name="email" value={this.state.email} placeholder="E-mail" onChange={this.onChange} onBlur={this.onBlur}/>
                </div>
                <div id="difficulty">
                  <button name="level" className="difficulty-button"  onClick={() => this.setState({ player: {
                    ...this.state.player,
                    level: 12
                  }})} > EASY</button>
                  <button name="level" className="difficulty-button"  onClick={() => this.setState({ player: {
                    ...this.state.player,
                    level: 8
                  }})} >MEDIUM</button>
                  <button name="level" className="difficulty-button"  onClick={() => this.setState({ player: {
                    ...this.state.player,
                    level: 5
                  }})} >HARD</button>
                </div>
                 <div >
                    <input id="submit" className="colorful-button" type="submit" value="Jogar!" />
                </div> 
            </form>
      </div>
    )
  }
}