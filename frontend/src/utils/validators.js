export const validators = {
  required: (value) => {
    return !!value || 'This field is required';
  },

  email: (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || 'Invalid email address';
  },

  minLength: (min) => (value) => {
    return (value && value.length >= min) || `Minimum length is ${min} characters`;
  },

  maxLength: (max) => (value) => {
    return (value && value.length <= max) || `Maximum length is ${max} characters`;
  },

  phone: (value) => {
    const pattern = /^[\d\s\-\(\)]+$/;
    return pattern.test(value) || 'Invalid phone number';
  },

  url: (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return 'Invalid URL';
    }
  },

  numeric: (value) => {
    return !isNaN(value) || 'Must be a number';
  },

  alphanumeric: (value) => {
    const pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(value) || 'Must contain only letters and numbers';
  }
};

export function validateForm(formData, rules) {
  const errors = {};
  
  for (const [field, fieldRules] of Object.entries(rules)) {
    const value = formData[field];
    
    for (const rule of fieldRules) {
      const result = rule(value);
      if (result !== true) {
        errors[field] = result;
        break;
      }
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
