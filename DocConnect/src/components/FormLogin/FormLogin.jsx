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
import {useEffect} from 'react';

import {HOME_PAGE, SIGNUP_PAGE} from '../../common/routes';
import FormRow from '../FormRow/FormRow';
import BoxCard from '../BoxCard/BoxCard';

const FormLogin = () => {
  const form = useForm({mode: 'onTouched'});
  const {register, handleSubmit, formState, setError} = form;
  const {errors, isSubmitting} = formState;
  const {token} = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() =>{
    localStorage.setItem('userToken', token);
  }, [token]);


  const onSubmit = async (values) => {
    const response = await dispatch(loginUser(values));
    if (response.payload.errorMessage) {
      setError('emailAddress', {message: response.payload.errorMessage});
      setError('password', {message: response.payload.errorMessage});
    } else if (response.payload.httpStatusCode === 200) {
      navigate('/');
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
            to={HOME_PAGE}
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
