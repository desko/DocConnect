import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Text,
  FormHelperText,
} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import Btn from '../Btn/Btn';
import {Link} from 'react-router-dom';

import {SIGNUP_VALIDATION} from '../../common/formConsts';


const FormSignup = () => {
  const form = useForm({mode: 'onTouched'});
  const {register, handleSubmit, formState, watch} = form;
  const {errors, isSubmitting} = formState;


  const onSubmit = (values) => {

  };


  return (
    <Box
      bgColor='offwhite.400'
      p='4rem 7rem'
      maxW='48rem'
      mx='auto'
      boxShadow='0 .4rem .4rem rgba(0,0,0, .25)'
      borderRadius='1.5rem'
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

        <Text>
          Already have an account?

          <Text
            as='span'
            color='red.400'
            textDecoration='underline'
            textDecorationColor='currentcolor'
            textDecorationThickness='.2rem'
            textUnderlineOffset='.3rem'
            pl='1rem'
            transition='text-decoration-color .4s'
            _hover={{
              textDecorationColor: 'transparent',
            }}
          >
            <Link to='/login'>Login</Link>
          </Text>
        </Text>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormControl
          variant='custom'
          isInvalid={errors.email}
        >
          <Box>
            <Box>
              <FormLabel
                variant='custom'
              >Email Address *</FormLabel>
            </Box>
          </Box>

          <Box
            _last={{
              mb: '2rem',
            }}
          >
            <Input
              placeholder='placeholder@email.com'
              type='email'
              variant='custom'
              {...register('email', SIGNUP_VALIDATION.EMAIL)}
            />
          </Box>

          <FormErrorMessage
            as='div'
          >
            {errors.email?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          variant='custom'
          isInvalid={errors.firstName}
        >
          <Box>
            <FormLabel
              variant='custom'
            >First Name *</FormLabel>
          </Box>

          <Box
            _last={{
              mb: '2rem',
            }}
          >
            <Input
              placeholder='First Name'
              type='text'
              variant='custom'
              {...register('firstName', SIGNUP_VALIDATION.FIRST_NAME)}
            />
          </Box>

          <FormErrorMessage
            as='div'
          >
            {errors.firstName?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          variant='custom'
          isInvalid={errors.lastName}
        >
          <Box>
            <FormLabel
              variant='custom'
            >Last Name *</FormLabel>
          </Box>

          <Box
            _last={{
              mb: '2rem',
            }}
          >
            <Input
              placeholder='Last Name'
              type='text'
              variant='custom'
              {...register('lastName', SIGNUP_VALIDATION.LAST_NAME)}
            />
          </Box>

          <FormErrorMessage
            as='div'
          >
            {errors.lastName?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          variant='custom'
          isInvalid={errors.password}
        >
          <Box>
            <FormLabel
              variant='custom'
            >Password *</FormLabel>
          </Box>

          <Box
            _last={{
              mb: '2rem',
            }}
          >
            <Input
              placeholder=''
              type='password'
              variant='custom'
              {...register('password', SIGNUP_VALIDATION.PASSWORD)}
            />
          </Box>

          <FormHelperText>
            Use 8 or more characters, with a mix of uppercase, lowercase, numbers and symbols.
          </FormHelperText>

          <FormErrorMessage
            as='div'
          >
            {errors.password?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          variant='custom'
          isInvalid={errors.confirmPassword}
        >
          <Box>
            <FormLabel
              variant='custom'
            >Confirm Password *</FormLabel>
          </Box>

          <Box
            _last={{
              mb: '2rem',
            }}
          >
            <Input
              placeholder=''
              type='password'
              variant='custom'
              {...register('confirmPassword', {

                required: {
                  value: true,
                  message: 'Please enter a password.',
                },
                validate: (val) => {
                  if (watch('password') !== val) {
                    return 'Those passwords didn’t match. Please try again.';
                  }
                },
              })}
            />
          </Box>

          <FormErrorMessage
            as='div'
          >
            {errors.confirmPassword?.message}
          </FormErrorMessage>
        </FormControl>

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
    </Box>
  );
};

export default FormSignup;
