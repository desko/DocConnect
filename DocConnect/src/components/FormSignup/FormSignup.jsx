import {
  Box,
  Heading,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import Btn from '../Btn/Btn';
import {Link as ReactRouterLink} from 'react-router-dom';

import {SIGNUP_VALIDATION} from '../../common/formConsts';
import {LOGIN_PAGE} from '../../common/routes';

import {registerUser} from '../../services/servicesUsers';
import FormRow from '../FormRow/FormRow';
import BoxCard from '../BoxCard/BoxCard';
import SignupSuccess from '../SignupSuccess/SignupSuccess';

const FormSignup = () => {
  const form = useForm({mode: 'onTouched'});
  const {register, handleSubmit, formState, watch, setError} = form;
  const {errors, isSubmitting} = formState;
  const [isRegistered, setIsRegistered] = useState(false);

  const onSubmit = async (values) => {
    const response = await registerUser(values);
    if (response.data.errorMessage) {
      setError('emailAddress', {message: response.data.errorMessage});
    } else if (response.data.httpStatusCode === 201) {
      setIsRegistered(true);
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
    return <SignupSuccess />;
  }

  return (
    <BoxCard
      customProps={{
        'aria-label': 'Signup',
        'role': 'group',
      }}
    >
      <Box
        as='header'
        pb='3rem'
      >
        <Heading
          as='h2'
          size='md'
          pb='.5rem'
        >Sign up</Heading>

        <Text
          display='inline-flex'
          gap={{
            base: '.5rem',
            md: '1rem',
          }}
          flexWrap='wrap'
        >
          Already have an account?

          <ChakraLink
            as={ReactRouterLink}
            to={LOGIN_PAGE}
            variant='custom'
          >Login</ChakraLink>
        </Text>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
          labelText='Password *'
          invalidate={errors.password}
          error={errors.password?.message}
          register={register}
          registerName='password'
          registerValidation={SIGNUP_VALIDATION.PASSWORD}
        />

        <FormRow
          type='password'
          labelText='Confirm Password *'
          invalidate={errors.confirmPassword}
          error={errors.confirmPassword?.message}
          register={register}
          registerName='confirmPassword'
          registerValidation={validateConfirmPassword}
        />

        <Btn
          text='Sign Up'
          type='submit'
          styleProps={{
            width: '100%',
          }}
          customProps={{
            isLoading: isSubmitting,
          }}
        />
      </form>
    </BoxCard>
  );
};

export default FormSignup;
