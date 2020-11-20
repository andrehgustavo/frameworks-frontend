<template>
  <div class="form-item">
      <input
        type="text"
        :placeholder="placeholder"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('blur', $event.target.name)"
        class="input-form"
      />
      <div class="error"> {{ error }}</div>
  </div>
</template>


<script scoped>
export default {
  props: [
    'type', // input (detfault) ou textarea
    'label', // label (opcional)
    'placeholder',
    // 'onChange',
    // 'onBlur',
    'isRequired',
    'touched',
    'error',
    'modelValue'
  ]
  // methods: {
  //   onChange(event) {
  //     this.$emit('update:modelValue', event.target.value)
  //     // this.$emit('change', this.name)
  //   }
  // }
  // data() {
  //   console.log(this.values)

  //   return {
  //     value: this.values[this.name]
  //   }
  // },
  // computed: {
  //   value() {
  //     return this.values[this.name]
  //   },
  //   updateName() {
  //     return `update:${this.name}`
  //   }
  // }
}
</script>


<style>
 @import url('https://fonts.googleapis.com/css?family=Fjalla+One');

.error {
  position: absolute;
  color: red;
  font-style: italic;
  font-size: smaller;
}
.input-error {
  border: 1px solid red !important;
}

input {
    font-family: 'Fjalla One', sans-serif;
    width: 220px;
    padding: 5px 5px;
    margin: 5px 5px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 4px;
    box-sizing: border-box;
}

</style>