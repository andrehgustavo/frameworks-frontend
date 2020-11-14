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
        playerName: '',
        nickname: '',
        birthday:'',
        email: '',
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
      [name]: value,
      touched: { ...state.touched, [name]: true }
    }))
  }

  onBlur(event) {
    const { name, value } = event.target
    const { [name]: removedError, ...rest } = this.state.errors
    const error = validate[name] ? validate[name](value) : null
    const errorValue = this.state.touched[name] ? error : null

    this.setState((state) => ({
      ...state,
      errors: {
        ...rest,
        [name]: errorValue
      }
    }))
  }

  onSubmit(event) {
    event.preventDefault()
    console.log(this.state)
  }


  render() {
    return (
        <div className="form">
            <form onSubmit={this.onSubmit}>
                <div>
                    <input name="playerName" value={this.state.playerName} placeholder="Name" onChange={this.onChange} onBlur={this.onBlur}/>
                    <input name="nickname" value={this.state.nickname} placeholder="Nickname" onChange={this.onChange} onBlur={this.onBlur}/>
                    <div className="error">{this.touched && this.errors.playerName}</div>
                </div>
                <div>
                    <input name="birthday" value={this.state.birthday} placeholder="Birthday" onChange={this.onChange} onBlur={this.onBlur}/>
                    <input name="email" value={this.state.email} placeholder="E-mail" onChange={this.onChange} onBlur={this.onBlur}/>
                </div>
                <div id="difficulty">
                            <button className="difficulty-button">EASY</button>
                            <button className="difficulty-button">MEDIUM</button>
                            <button className="difficulty-button">HARD</button>
                </div>
                <div >
                    <input id="submit" className="colorful-button" type="submit" value="Enviar" />
                </div>
            </form>
      </div>
    )
  }
}