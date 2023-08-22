export const SYSTEM_MESSAGE = {
  SUCCESSFUL_REGISTRATION: {
    HEADING: 'Congratulations!',
    TEXT: 'Your account has been created successfully.',
    LOGINLINK: true,
  },
  SUCCESSFUL_VERIFICATION: {
    HEADING: 'Congratulations!',
    TEXT: 'Your account was successfully verified.',
    LOGINLINK: true,
  },
  INVALID_TOKEN: {
    HEADING: 'The token expired or is invalid',
    TEXT: 'Please login and request another verification email.',
    LOGINLINK: true,
  },
  ALREADY_VERIFIED: {
    HEADING: 'Your account has already been verified!',
    TEXT: 'You can login and use all of the website functionalities.',
    LOGINLINK: true,
  },
  ERROR: {
    HEADING: 'ERROR',
    TEXT: 'An unexpected error has ocurred, please try again.',
    LOGINLINK: false,
  },
};
