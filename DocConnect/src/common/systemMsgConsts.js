export const SYSTEM_MESSAGE = {
  SUCCESSFUL_REGISTRATION: {
    HEADING: 'Congratulations!',
    TEXT: 'Your account has been created successfully.',
    LOGIN_LINK: true,
  },
  SUCCESSFUL_VERIFICATION: {
    HEADING: 'Congratulations!',
    TEXT: 'Your account was successfully verified.',
    LOGIN_LINK: true,
  },
  INVALID_TOKEN: {
    HEADING: 'The token expired or is invalid',
    TEXT: 'Please login and request another verification email.',
    LOGIN_LINK: true,
  },
  ALREADY_VERIFIED: {
    HEADING: 'Your account has already been verified!',
    TEXT: 'You can login and use all of the website functionalities.',
    LOGIN_LINK: true,
  },
  ERROR: {
    HEADING: 'ERROR',
    TEXT: 'An unexpected error has ocurred, please try again.',
    LOGIN_LINK: false,
  },
  SUCCESSFUL_PASSWORD_RESET: {
    HEDING: 'Congratulations!',
    TEXT: 'Your password has been successfully reset.',
    LOGIN_LINK: true,
  },
  INVALID_TOKEN_PASSWORD_RESET: {
    HEDING: 'Congratulations!',
    TEXT: 'You can request a new token here.',
    RESET_LINK: true,
  },
};
