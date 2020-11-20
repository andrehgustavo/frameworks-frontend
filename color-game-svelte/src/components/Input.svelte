<div class="form-item">
	<div>
		<input
        type="text"
        class={error ? 'input-error' : ''}
        {placeholder}
        bind:value={value}
        on:input
        on:blur 
        />
    <div class="error">{ error || '' }</div>
  </div>
</div>

<script>
  export let type = 'input'
  export let label = ''
  export let placeholder = ''
  export let value = ''
  export let isRequired = false
  export let error = ''
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Fjalla+One');

.error {
  position: absolute;
  color: red;
  font-style: italic;
  font-size: smaller;
  align-items: center;
  text-align: center;
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