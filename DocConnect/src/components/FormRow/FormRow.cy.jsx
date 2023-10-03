import FormRow from './FormRow';
import '@testing-library/cypress/add-commands';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import {SIGNUP_VALIDATION} from '../../common/formConsts';


const MockForm = ({mockRow}) =>{
  const form = useForm({mode: 'onTouched'});
  const {register, formState} = form;
  const {errors} = formState;


  return (
    <ChakraProvider theme={theme}>
      <form onSubmit={() =>{}} noValidate>
        <FormRow
          type = {mockRow.type}
          placeholder = {mockRow.placeholder}
          invalidate = {errors[mockRow.registerName]}
          error = {errors[mockRow.registerName]?.message}
          labelText = {mockRow.labelText}
          registerName = {mockRow.registerName}
          registerValidation = {mockRow.registerValidation}
          register={register}
        />
      </form>
    </ChakraProvider>
  );
};

describe('FormRow', () => {
  it('should show validate error message when input is invalid - email', () => {
    const mockRow = {
      type: 'email',
      placeholder: 'placeholder@email.com',
      labelText: 'Email Address *',
      registerName: 'emailAddress',
      registerValidation: SIGNUP_VALIDATION.EMAIL,
    };

    cy.mount(<MockForm mockRow={mockRow}/>);
    cy.findByText(/email address \*/i).as('label').should('exist');
    cy.findByRole('textbox', {name: /email address \*/i}).as('input').should('exist');
    cy.findByText(/please enter an email address\./i).should('not.exist');

    cy.get('@input').click();
    cy.get('@label').click();
    cy.findByText(/please enter an email address\./i).should('exist');

    cy.findByText(/please enter a valid email address\./i).should('not.exist');
    cy.get('@input').type('test@test');
    cy.findByText(/please enter a valid email address\./i).should('exist');
    cy.get('@input').clear();
    cy.get('@input').type('test@test.test');
    cy.findByText(/please enter a valid email address\./i).should('not.exist');
  });

  it('should show validate error message when input is invalid - first name', () => {
    const mockRow = {
      type: 'text',
      placeholder: 'First Name',
      labelText: 'First Name *',
      registerName: 'firstName',
      registerValidation: SIGNUP_VALIDATION.FIRST_NAME,
    };

    cy.mount(<MockForm mockRow={mockRow}/>);
    cy.findByText(/first name \*/i).as('label').should('exist');
    cy.findByRole('textbox', {name: /first name \*/i}).as('input').should('exist');
    cy.findByText(/please enter a first name\./i).should('not.exist');

    cy.get('@input').click();
    cy.get('@label').click();
    cy.findByText(/please enter a first name\./i).should('exist');

    cy.get('@input').type('test');
    cy.findByText(/please enter a first name\./i).should('not.exist');
    cy.get('@input').clear();
    cy.findByText(/first name must be less than 50 characters long\./i).should('not.exist');
    cy.get('@input').type('Lorem ipsum dolor sit amet, consectetuer adipiscing');
    cy.findByText(/first name must be less than 50 characters long\./i).should('exist');
  });

  it('should show validate error message when input is invalid - last name', () => {
    const mockRow = {
      type: 'text',
      placeholder: 'Last Name',
      labelText: 'Last Name *',
      registerName: 'lastName',
      registerValidation: SIGNUP_VALIDATION.LAST_NAME,
    };

    cy.mount(<MockForm mockRow={mockRow}/>);
    cy.findByText(/last name \*/i).as('label').should('exist');
    cy.findByRole('textbox', {name: /last name \*/i}).as('input').should('exist');
    cy.findByText(/please enter a last name\./i).should('not.exist');

    cy.get('@input').click();
    cy.get('@label').click();
    cy.findByText(/please enter a last name\./i).should('exist');

    cy.get('@input').type('test');
    cy.findByText(/please enter a last name\./i).should('not.exist');
    cy.get('@input').clear();
    cy.findByText(/last name must be less than 50 characters long\./i).should('not.exist');
    cy.get('@input').type('Lorem ipsum dolor sit amet, consectetuer adipiscing');
    cy.findByText(/last name must be less than 50 characters long\./i).should('exist');
  });

  it('should show validate error message when input is invalid - password', () => {
    const mockRow = {
      type: 'password',
      placeholder: '',
      labelText: 'Password *',
      registerName: 'password',
      registerValidation: SIGNUP_VALIDATION.PASSWORD,
    };

    cy.mount(<MockForm mockRow={mockRow}/>);

    cy.findByText(/password \*/i).as('label').should('exist');
    cy.findByLabelText(/password \*/i).as('input').should('exist');
    cy.findByText(/please enter a password\./i).should('not.exist');

    cy.get('@input').click();
    cy.get('@label').click();
    cy.findByText(/please enter a password\./i).should('exist');

    cy.findByText(/password must be at least 8 characters long\./i).should('not.exist');
    cy.get('@input').type('test');
    cy.findByText(/password must be at least 8 characters long\./i).should('exist');

    // eslint-disable-next-line max-len
    cy.findByText( /your password must have at least 8 characters, with a mix of uppercase, lowercase, numbers and symbols\./i )
        .should('not.exist');
    cy.get('@input').type('test');
    // eslint-disable-next-line max-len
    cy.findByText( /your password must have at least 8 characters, with a mix of uppercase, lowercase, numbers and symbols\./i )
        .should('exist');
    cy.findByText(/password must be at least 8 characters long\./i).should('not.exist');

    cy.get('@input').type('T1!');
    // eslint-disable-next-line max-len
    cy.findByText( /your password must have at least 8 characters, with a mix of uppercase, lowercase, numbers and symbols\./i )
        .should('not.exist');
  });
});
