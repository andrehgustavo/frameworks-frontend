<template>
  <form @submit.prevent="onSubmit">
       <div class="div-bloco"> 
            <Input
                :modelValue="p.playername"
                @update:modelValue="p.playername = $event"
                placeholder="Player name"
                isRequired="true"
                :error="errors['playername']"
                @input="touched['playername']=true"
                @blur="checkField('playername')"
            />
            <Input
                :modelValue="p.nickname"
                @update:modelValue="p.nickname = $event"
                placeholder="Nickname"
                isRequired="true"
                :error="errors['nickname']"
                @input="touched['nickname'] = true"
                @blur="checkField('nickname')"
            />
        </div>
        <div class="div-bloco">
            <Input
                :modelValue="p.birthday"
                @update:modelValue="p.birthday = $event"
                placeholder="Birthday"
                isRequired="true"
                :error="errors['birthday']"
                @input="touched['birthday'] = true"
                @blur="checkField('birthday')"
            />
            <Input
                :modelValue="p.email"
                @update:modelValue="p.email = $event"
                placeholder="Email"
                isRequired="true"
                :error="errors['email']"
                @input="touched['email'] = true"
                @blur="checkField('email')"
            /> 
        </div>
        <div class="div-bloco">
            <div class="time">
                <button name="level" @click="setLevel(12)" class="colorful-button" >EASY</button>
                <button name="level" @click="setLevel(8)" class="colorful-button">MEDIUM</button>
                <button name="level" @click="setLevel(5)" class="colorful-button" >HARD</button>
            </div>    
        </div>
        <div class="div-bloco">
            <input type="submit" value="jogar" />
        </div>
  </form>
</template>

<script>
import Input from './Input.vue'
import { minLengthValidation, requiredValidation } from './validations'

const validate = {
    playername: (value) => minLengthValidation(3, value),
    nickname: requiredValidation,
    birthday: requiredValidation,
    email: requiredValidation
}

export default {
  components: { Input },
  props: ['player'],
  data() {
    const { playername, nickname, birthday, email, level } = this.player || {}
   /*  
   const playername = this.player.playername || ''
   const nickname = this.player.nickname || ''
    const birthday = this.player.birthday || ''
    const email = this.player.email || ''
    const level = this.player.level || 0 */
    
    return {
      p: { playername, nickname, birthday, email, level },
      errors: {},
      touched: {}
    }
  },
  methods: {
    checkField(name) {
        const value = this.p[name]
        //this.touched[name] = true

        const error = validate[name] ? validate[name](value) : null
        const  nameError = this.touched[name] ? error : null

        this.errors[name] = nameError
    },

    onSubmit(e) {
        e.preventDefault();
      Object.keys(this.p).forEach((field) => {
        this.touched[field] = true
        this.checkField(field)
      })

      const errorsIsEmpty = !Object.values(this.errors).some((v) => v)
      
      console.log("erros ta vazio?",errorsIsEmpty)
      
       if (errorsIsEmpty) {
        this.$emit('update', {
         player: this.p
        })
        console.log("enviando para home o player", this.p)
      }
    },

    setLevel(value){
        this.p.level = value
    }
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Fjalla+One');

div .form-item {
  display: flex;
  margin: 5px 5px 5px 5px;
  display: block;
  background-color: beige;
}

  form {
    z-index: 1000;
    position: relative;
  }

  div.div-bloco {
    margin: 5px 5px;
    display: flex;
    justify-content: center;
    width: 100%;
  }

input {
    font-family: 'Fjalla One', sans-serif;
    width: 475px;
    padding: 5px 5px;
    margin: 5px 5px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 4px;
    box-sizing: border-box;
}

button {
  width: 150px;
  padding: 5px 5px;
  margin: 5px 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: 'Fjalla One', sans-serif;
  pointer-events: auto;
  cursor: default;
}

input.ng-invalid.ng-touched {
  border-color: red;
}
.error {
  color: red;
  font-style: italic;
  font-size: 12px;
}

</style>