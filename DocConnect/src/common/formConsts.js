

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
    pattern: {
      value: /^(?!.*\s{2,})\S(?:\s?\S)*$/,
      message: 'Please enter a valid first name.',
    },
    maxLength: {
      value: 49,
      message: 'First name must be less than 50 characters long.',
    },
  },
  LAST_NAME: {
    required: {
      value: true,
      message: 'Please enter a last name.',
    },
    pattern: {
      value: /^(?!.*\s{2,})\S(?:\s?\S)*$/,
      message: 'Please enter a valid last name.',
    },
    maxLength: {
      value: 49,
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
      value: 99,
      message: 'Password must be less than 100 characters long.',
    },
    pattern: {
      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
      // eslint-disable-next-line max-len
      message: 'Your password must have at least 8 characters, with a mix of uppercase, lowercase, numbers and symbols.',
    },
  },
  REQUIRED_PRIVACY_AGREEMENT: {
    required: {
      value: true,
      message: 'You must agree with the Privacy Policy',
    },
  },
  REQUIRED_USER_AGREEMENT: {
    required: {
      value: true,
      message: 'You must accept the User Agreement',
    },
  },
  REQUIRED_AGE: {
    required: {
      value: true,
      message: 'You must be over 18 years of age',
    },
  },
};

export const LOGIN_VALIDATION = {
  EMAIL: {
    required: {
      value: true,
      message: 'Please enter your email address.',
    },
    pattern: {
      // eslint-disable-next-line max-len
      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Please enter a valid email address.',
    },
  },
  PASSWORD: {
    required: {
      value: true,
      message: 'Please enter your password.',
    },
  },
};

export const FORGOTTEN_PASSWORD_VALIDATION = {
  EMAIL: {
    required: {
      value: true,
      message: 'Please enter your email address.',
    },
    pattern: {
      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Please enter a valid email address.',
    },
  },
};

export const RESET_PASSWORD_VALIDATION = {
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
      value: 99,
      message: 'Password must be less than 100 characters long.',
    },
    pattern: {
      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
      // eslint-disable-next-line max-len
      message: 'Your password must have at least 8 characters, with a mix of uppercase, lowercase, numbers and symbols.',
    },
  },
};
