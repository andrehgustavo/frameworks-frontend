export function minLengthValidation(minLength, value) {
    if (!value || value.trim().length < minLength) {
      return `This field requires at least ${minLength} characters   `
    }
    return null
  }
  
  export function requiredValidation(value) {
    if (!value || value.trim() == '') {
      return 'Required field'
    }
    return null
  }
  