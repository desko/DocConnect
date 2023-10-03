import {Box, Heading, Text, Link as ChakraLink} from '@chakra-ui/react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import Btn from '../Btn/Btn';
import {Link as ReactRouterLink} from 'react-router-dom';

import {SIGNUP_VALIDATION} from '../../common/formConsts';
import {LOGIN_PAGE, PRIVACY_POLICY_PAGE, USER_AGREEMENT_PAGE} from '../../common/routes';

import {registerUser} from '../../services/servicesUsers';
import FormRow from '../FormRow/FormRow';
import BoxCard from '../BoxCard/BoxCard';
import SystemMessage from '../SystemMessage/SystemMessage';
import FormCheckbox from '../FormCheckbox/FormCheckbox';
import NetworkError from '../NetworkError/NetworkError';

const FormSignup = () => {
  const form = useForm({mode: 'onTouched'});
  const {register, handleSubmit, formState, watch, setError, control} = form;
  const {errors, isSubmitting, isValid} = formState;
  const [isRegistered, setIsRegistered] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const onSubmit = async (values) => {
    const response = await registerUser(values);

    if (response?.data?.httpStatusCode === 201) {
      setNetworkError(false);
      setIsRegistered(true);
    }

    if (response?.response?.data?.success === false && response?.response?.data?.errorMessage) {
      const err = response.response.data.errorMessage;
      const replaceMessage = 'This email is already registered by another user.';
      const message = err === replaceMessage ? 'Invalid email address' : err;
      setError('emailAddress', {message});
      setNetworkError(false);
    }

    if (
      response?.code === 'ERR_NETWORK' ||
      response?.status === 0 ||
      response?.response?.status > 400
    ) {
      setNetworkError(true);
    }
  };

  const validateConfirmPassword = {
    required: {
      value: true,
      message: 'Please enter a password.',
    },
    validate: (val) => {
      if (watch('password') !== val) {
        return 'Those passwords didn’t match. Please try again.';
      }
    },
  };

  if (isRegistered) {
    return (
      <SystemMessage
        type={'SUCCESSFUL_REGISTRATION'}
      />
    );
  }

  return (
    <BoxCard
      customProps={{
        'aria-label': 'Signup',
        'role': 'group',
      }}
    >
      <Box as='header' pb='3rem'>
        <Heading as='h2' size='md' pb='.5rem'>
          Sign up
        </Heading>

        <Text
          display='inline-flex'
          gap={{
            base: '.5rem',
            md: '1rem',
          }}
          flexWrap='wrap'
        >
          Already have an account?
          <ChakraLink as={ReactRouterLink} to={LOGIN_PAGE} variant='custom'>
            Login
          </ChakraLink>
        </Text>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {
          networkError && <NetworkError />
        }

        <FormRow
          type='email'
          placeholder='placeholder@email.com'
          invalidate={errors.emailAddress}
          error={errors.emailAddress?.message}
          labelText='Email Address *'
          register={register}
          registerName='emailAddress'
          registerValidation={SIGNUP_VALIDATION.EMAIL}
        />

        <FormRow
          type='text'
          placeholder='First Name'
          labelText='First Name *'
          invalidate={errors.firstName}
          error={errors.firstName?.message}
          register={register}
          registerName='firstName'
          registerValidation={SIGNUP_VALIDATION.FIRST_NAME}
        />

        <FormRow
          type='text'
          placeholder='Last Name'
          labelText='Last Name *'
          invalidate={errors.lastName}
          error={errors.lastName?.message}
          register={register}
          registerName='lastName'
          registerValidation={SIGNUP_VALIDATION.LAST_NAME}
        />

        <FormRow
          type='password'
          placeholder='Password'
          labelText='Password *'
          invalidate={errors.password}
          error={errors.password?.message}
          register={register}
          registerName='password'
          registerValidation={SIGNUP_VALIDATION.PASSWORD}
          helpText='Use 8 or more characters, with a mix of uppercase, lowercase, numbers and symbols.'
        />

        <FormRow
          type='password'
          placeholder='Confirm Password'
          labelText='Confirm Password *'
          invalidate={errors.confirmPassword}
          error={errors.confirmPassword?.message}
          register={register}
          registerName='confirmPassword'
          registerValidation={validateConfirmPassword}
        />

        <FormCheckbox
          labelText='I am over 18 years of age'
          register={register}
          registerName='ageAgreement'
          registerValidation={SIGNUP_VALIDATION.REQUIRED_AGE}
          error={errors.ageAgreement?.message}
          invalidate={errors.ageAgreement}
          control={control}
        />

        <FormCheckbox
          LabelElement={
            () => <span>
              I have read and agree to the <ChakraLink
                target='_blank'
                as={ReactRouterLink}
                to={PRIVACY_POLICY_PAGE}
                variant='custom'
              >Privacy Policy</ChakraLink>
            </span>
          }
          register={register}
          registerName='privacyAgreement'
          registerValidation={SIGNUP_VALIDATION.REQUIRED_PRIVACY_AGREEMENT}
          error={errors.privacyAgreement?.message}
          invalidate={errors.privacyAgreement}
          control={control}
        />

        <FormCheckbox
          LabelElement={
            () => <span>
              I have read and agree to the <ChakraLink
                target='_blank'
                as={ReactRouterLink}
                to={USER_AGREEMENT_PAGE}
                variant='custom'
              >User Agreement</ChakraLink>
            </span>
          }
          register={register}
          registerName='userAgreement'
          registerValidation={SIGNUP_VALIDATION.REQUIRED_USER_AGREEMENT}
          error={errors.userAgreement?.message}
          invalidate={errors.userAgreement}
          control={control}
        />

        <Btn
          text='Sign Up'
          type='submit'
          styleProps={{
            width: '100%',
          }}
          customProps={{
            isLoading: isSubmitting,
            isDisabled: !isValid,
          }}
        />
      </form>
    </BoxCard>
  );
};

export default FormSignup;
