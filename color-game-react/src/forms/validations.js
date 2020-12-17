export function minLengthValidation(minLength, value) {
    if (value.trim().length < minLength) {
      return `This field requires at least ${minLength} characters`
    }
    return null
  }
  
  export function requiredValidation(value) {
    if (value.trim() === '') {
      return 'Required field'
    }
    return null
  }

  export function emailValidation(value) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (!pattern.test(value.trim())) {
      return 'Please, insert a valid email' 
    }
    return null
  }

  export function ageValidation(value) {
    var today = new Date().getFullYear();
    var birth = new Date(value).getFullYear();    
    var diff = parseInt(today) - parseInt(birth); 
    if (value.trim() === '') {
      return 'Required field'
    }else if (diff < 10) {
      return 'Minimum age allowed is 10 years'
    }  
    return null
  }

  export function levelValidation(value) {
    if (value === 0) {
      return 'Required choose a level'
    }
    return null
  }