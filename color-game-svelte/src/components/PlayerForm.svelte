<form on:submit|preventDefault={submit}>
    <div class="div-bloco"> 
        <Input 
            bind:value={p.playername} 
            on:input={e=> touched['playername']=true} 
            on:blur={e => checkField('playername')} 
            placeholder="Player name" 
            isRequired="true" 
            error={errors['playername']} 
        />
        <Input 
            bind:value={p.nickname} 
            on:input={e=> touched['nickname']=true} 
            on:blur={e => checkField('nickname')} 
            placeholder="Nick name" 
            isRequired="true" 
            error={errors['nickname']} 
        />
    </div>
    <div class="div-bloco"> 
        <Input 
            bind:value={p.birthday} 
            on:input={e=> touched['birthday']=true} 
            on:blur={e => checkField('birthday')} 
            placeholder="Birthday" 
            isRequired="true" 
            error={errors['birthday']} 
        />
        <Input 
            bind:value={p.email} 
            on:input={e=> touched['email']=true} 
            on:blur={e => checkField('email')} 
            placeholder="Email" 
            isRequired="true" 
            error={errors['email']} 
        />
    </div>
    <div class="time">
        <button class="colorful-button" class="buttonlevel" on:click={() => setLevel(12)}> EASY</button>
        <button class="colorful-button" class="buttonlevel" on:click={() => setLevel(8)}> MEDIUM</button>
        <button class="colorful-button" class="buttonlevel" on:click={() => setLevel(5)}> HARD</button>
    </div>
    <div class="div-bloco"> 
	    <input type="submit" value="Jogar">
    </div>
</form>

<script>
  import {
    minLengthValidation,
    requiredValidation
  } from './validations.js'
  
  import { createEventDispatcher } from 'svelte'
  
  import Input from './Input.svelte'

  export let player
  const validate = {
    playername: value => minLengthValidation(3, value),
    nickname: requiredValidation,
    birthday: requiredValidation,
    email: requiredValidation
  }

  let errors = {}
  let touched = {}
  const dispatch = createEventDispatcher()

  const { playername, nickname, birthday, email, level } = player || {}
  let p = {playername, nickname, birthday, email, level }

  function checkField(name) {
    errors[name] = ''
    if (validate[name] && touched[name]) {
      const value = p[name]
      errors[name] = validate[name](value) || ''
    }
  }

  function submit() {
    Object.keys(p).forEach(field => {
      touched[field] = true
      checkField(field)
    })
    const errorsIsEmpty = !Object.values(errors).some(v => v)
    if (errorsIsEmpty) {
    console.log("enviando de PlayerForm", p)
      dispatch('update', {
          playername: p.playername,
          nickname: p.nickname,
          birthday: p.birthday,
          email: p.email,
          level: p.level
      })
    }
  }

  function setLevel(value) {
    p.level = value
  }
</script>
