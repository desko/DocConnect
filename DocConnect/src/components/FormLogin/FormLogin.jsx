import {
  Box,
  Heading,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import Btn from '../Btn/Btn';
import {Link as ReactRouterLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {LOGIN_VALIDATION} from '../../common/formConsts';
import {loginUser} from '../../services/servicesUsers';
import {useEffect, useState} from 'react';

import {FORGOTTEN_PASSWORD_PAGE, SIGNUP_PAGE} from '../../common/routes';
import FormRow from '../FormRow/FormRow';
import BoxCard from '../BoxCard/BoxCard';
import NetworkError from '../NetworkError/NetworkError';

const FormLogin = () => {
  const form = useForm({mode: 'onTouched'});
  const {register, handleSubmit, formState, setError} = form;
  const {errors, isSubmitting, isValid} = formState;
  const {token} = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [networkError, setNetworkError] = useState(false);

  useEffect(() =>{
    localStorage.setItem('userToken', token);
  }, [token]);

  const onSubmit = async (values) => {
    const response = await dispatch(loginUser(values));

    console.log(response);
    if (response.payload?.errorMessage) {
      console.log(response.payload.errorMessage);
      setError('emailAddress', {message: response.payload.errorMessage});
      setError('password', {message: response.payload.errorMessage});
      setNetworkError(false);
    }

    if (response.payload?.httpStatusCode === 200) {
      setNetworkError(false);
      navigate('/');
    }
    if (response?.error) {
      setNetworkError(true);
    }
  };

  return (
    <BoxCard
      customProps={{
        'aria-label': 'Login',
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
        >Login</Heading>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {
          networkError && <NetworkError />
        }

        <FormRow
          type='email'
          placeholder='placeholder@email.com'
          labelText='Email Address *'
          register={register}
          registerName='emailAddress'
          registerValidation={LOGIN_VALIDATION.EMAIL}
          error={errors.emailAddress?.message}
          invalidate={errors.emailAddress}
        />

        <FormRow
          type='password'
          labelText='Password *'
          placeholder='Password'
          register={register}
          registerName='password'
          registerValidation={LOGIN_VALIDATION.PASSWORD}
          error={errors.password?.message}
          invalidate={errors.password}
        />

        <Box
          textAlign='right'
          pb='2rem'
        >
          <ChakraLink
            as={ReactRouterLink}
            to={FORGOTTEN_PASSWORD_PAGE}
            variant='custom'
          >Forgot Password?</ChakraLink>
        </Box>

        <Btn
          text='Login'
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

      <Box
        pt='3.5rem'
      >
        <Text
          display='flex'
          justifyContent='center'
          alignItems='center'
          gap={{
            base: '.5rem',
            md: '1rem',
          }}
          flexWrap='wrap'
        >
          Don’t have an account yet?

          <ChakraLink
            as={ReactRouterLink}
            to={SIGNUP_PAGE}
            variant='custom'
          >Sign up</ChakraLink>
        </Text>
      </Box>
    </BoxCard>
  );
};

export default FormLogin;
