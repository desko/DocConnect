

export const SIGNUP_VALIDATION = {
  EMAIL: {
    required: {
      value: true,
      message: 'Please enter an email address.',
    },
    pattern: {
      // eslint-disable-next-line max-len
      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Please enter a valid email address.',
    },
  },
  FIRST_NAME: {
    required: {
      value: true,
      message: 'Please enter a first name.',
    },
    maxLength: {
      value: 50,
      message: 'First name must be less than 50 characters long.',
    },
  },
  LAST_NAME: {
    required: {
      value: true,
      message: 'Please enter a last name.',
    }, maxLength: {
      value: 50,
      message: 'Last name must be less than 50 characters long.',
    },
  },
  PASSWORD: {
    required: {
      value: true,
      message: 'Please enter a password.',
    },
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters long.',
    },
    maxLength: {
      value: 100,
      message: 'Pssword must be less than 100 characters long.',
    },
    pattern: {
      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
      // eslint-disable-next-line max-len
      message: 'Your password must have at least 8 characters, with a mix of uppercase, lowercase, numbers and symbols.',
    },

  },
};
