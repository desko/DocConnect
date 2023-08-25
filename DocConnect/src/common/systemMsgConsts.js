import TextLink from '../components/TextLink/TextLink';
import {FORGOTTEN_PASSWORD_PAGE} from './routes';

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
    HEADING: 'Congratulations!',
    TEXT: 'Your password has been successfully reset.',
    LOGIN_LINK: true,
  },
  INVALID_TOKEN_PASSWORD_RESET: {
    HEADING: 'The token has expired or is invalid',
    TEXT_ELEMENT: {
      element: TextLink,
      props: {
        link: {
          url: FORGOTTEN_PASSWORD_PAGE,
          text: 'here',
        },
        text: 'You can request a new token ',
      },
    },
  },
  LOADING: {
    HEADING: 'Loading...',
    TEXT: 'Please wait a moment or',
    LOGINLINK: true,
  },
};
