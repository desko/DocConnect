import '@testing-library/cypress/add-commands';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import {SIGNUP_VALIDATION} from '../../common/formConsts';
import FormCheckbox from './FormCheckbox';

const MockForm = ({mockCheckbox}) => {
  const form = useForm({mode: 'onTouched'});
  const {register, formState, control} = form;
  const {errors} = formState;

  return (
    <ChakraProvider theme={theme}>
      <form onSubmit={() => { }} noValidate>
        <FormCheckbox
          invalidate={errors[mockCheckbox.registerName]}
          error={errors[mockCheckbox.registerName]?.message}
          labelText={mockCheckbox.labelText}
          registerName={mockCheckbox.registerName}
          registerValidation={mockCheckbox.registerValidation}
          register={register}
          control={control}
        />
      </form>
    </ChakraProvider>
  );
};

describe('<FormCheckbox />', () => {
  it('renders age verification checkbox', () => {
    const mockCheckbox = {
      labelText: 'I am over 18 years of age',
      registerName: 'ageAgreement',
      registerValidation: SIGNUP_VALIDATION.REQUIRED_AGE,
    };

    cy.mount(<MockForm mockCheckbox={mockCheckbox} />);
    cy.findByRole('group', {name: /ageagreement/i}).as('group');
    cy.get('@group').find('label').as('label').should('exist');
    cy.get('@group').find('input').as('input').should('exist');

    cy.get('@input').should('not.be.checked');
    cy.findByText(/you must be over 18 years of age/i).should('not.exist');
    cy.get('@label').click();
    cy.get('@input').should('be.checked');
    cy.findByText(/you must be over 18 years of age/i).should('not.exist');
    cy.get('@label').click();
    cy.get('@input').should('not.be.checked');
    cy.findByText(/you must be over 18 years of age/i).should('not.exist');
    cy.get('@group').click();
    cy.findByText(/you must be over 18 years of age/i).should('exist');
    cy.get('@label').click();
    cy.findByText(/you must be over 18 years of age/i).should('not.exist');
  });

  it('renders Privacy Policy verification checkbox', () => {
    const mockCheckbox = {
      labelText: 'I have read and agree to the Privacy Policy',
      registerName: 'privacyAgreement',
      registerValidation: SIGNUP_VALIDATION.REQUIRED_PRIVACY_AGREEMENT,
    };

    cy.mount(<MockForm mockCheckbox={mockCheckbox} />);
    cy.findByRole('group', {name: /privacyagreement/i}).as('group');
    cy.get('@group').find('label').as('label').should('exist');
    cy.get('@group').find('input').as('input').should('exist');

    cy.get('@input').should('not.be.checked');
    cy.findByText(/you must agree with the privacy policy/i).should('not.exist');
    cy.get('@label').click();
    cy.get('@input').should('be.checked');
    cy.findByText(/you must agree with the privacy policy/i).should('not.exist');
    cy.get('@label').click();
    cy.get('@input').should('not.be.checked');
    cy.findByText(/you must agree with the privacy policy/i).should('not.exist');
    cy.get('@group').click();
    cy.findByText(/you must agree with the privacy policy/i).should('exist');
    cy.get('@label').click();
    cy.findByText(/you must agree with the privacy policy/i).should('not.exist');
  });

  it('renders User Agreement verification checkbox', () => {
    const mockCheckbox = {
      labelText: 'I have read and agree to the User Agreement',
      registerName: 'privacyAgreement',
      registerValidation: SIGNUP_VALIDATION.REQUIRED_USER_AGREEMENT,
    };

    cy.mount(<MockForm mockCheckbox={mockCheckbox} />);
    cy.findByRole('group', {name: /privacyagreement/i}).as('group');
    cy.get('@group').find('label').as('label').should('exist');
    cy.get('@group').find('input').as('input').should('exist');

    cy.get('@input').should('not.be.checked');
    cy.findByText(/you must accept the user agreement/i).should('not.exist');
    cy.get('@label').click();
    cy.get('@input').should('be.checked');
    cy.findByText(/you must accept the user agreement/i).should('not.exist');
    cy.get('@label').click();
    cy.get('@input').should('not.be.checked');
    cy.findByText(/you must accept the user agreement/i).should('not.exist');
    cy.get('@group').click();
    cy.findByText(/you must accept the user agreement/i).should('exist');
    cy.get('@label').click();
    cy.findByText(/you must accept the user agreement/i).should('not.exist');
  });
});
