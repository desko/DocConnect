import '@testing-library/cypress/add-commands';
import FormResetPassword from './FormResetPassword';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter, useSearchParams} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
import {useEffect} from 'react';

const Wrapper = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      userId: '1',
      token: '2',
    });
  }, [setSearchParams]);

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <FormResetPassword />
      </Provider>
    </ChakraProvider>
  );
};

describe('FormResetPassword', () => {
  beforeEach(() => {
    cy.mount(
        <BrowserRouter>
          <Wrapper />
        </BrowserRouter>,
    );

    // Heading
    cy.findByRole('heading', {name: /reset password/i}).as('heading');

    cy.findByText(/use 8 or more characters, with a mix of uppercase, lowercase, numbers and symbols\./i).as('hint');

    // Password
    cy.get('input[name="password"]').as('inputPassword');

    // Confirm Password
    cy.findByLabelText(/confirm password \*/i).as('inputConfirmPassword');

    // Submit button
    cy.findByRole('button', {name: /submit/i}).as('submitButton');

    cy.intercept('POST', `api/User/ResetPassword?userId=1&token=2`, {
      body: {
        success: true,
        httpStatusCode: 200,
        errorMessage: null,
        result: 'SUCCESSFUL_PASSWORD_RESET',
      },
    }).as('requestReset');
  });

  it('should render with all elements', () => {
    cy.get('@heading').should('exist');
    cy.get('@inputPassword').should('exist');
    cy.get('@hint').should('exist');
    cy.get('@inputConfirmPassword').should('exist');
    cy.get('@submitButton').should('exist');
  });

  it('populates form with correct info and redirects', () => {
    const mockPassword = 'Test1234@';
    const mockPasswordConfirm = 'Test1234@';
    cy.get('@inputPassword').type(mockPassword);
    cy.get('@inputConfirmPassword').type(mockPasswordConfirm);
    cy.get('@heading').click();

    // eslint-disable-next-line max-len
    cy.findByText(/your password must have at least 8 characters, with a mix of uppercase, lowercase, numbers and symbols\./i).should('not.exist');
    cy.get('@submitButton').click();

    cy.wait('@requestReset');
    cy.location('pathname').should('match', /\/login\/reset-password\/success$/);
  });

  it('populates form with wrong info - no request', () => {
    const mockPassword = 'Test1234';
    const mockPasswordConfirm = 'Test1234';
    const mockUserId = '1';
    const mockToken = '2';
    cy.get('@inputPassword').type(mockPassword);
    cy.get('@inputConfirmPassword').type(mockPasswordConfirm);
    cy.get('@heading').click();
    // eslint-disable-next-line max-len
    cy.findByText(/your password must have at least 8 characters, with a mix of uppercase, lowercase, numbers and symbols\./i).should('exist');
    cy.get('@submitButton').click({force: true});
    cy.intercept('POST', `${import.meta.env.VITE_BASE_URL}User/ResetPassword?userId=${
      encodeURIComponent(mockUserId)
    }&token=${
      encodeURIComponent(mockToken.replace(/ /g, '+'))
    }`, cy.spy().as('myRequest')).as('requestReset');

    cy.get('@myRequest').should('not.have.been.called');
  });
});
