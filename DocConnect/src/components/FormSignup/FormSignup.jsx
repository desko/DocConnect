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


const FormSignup = () => {
  const form = useForm();
  const {register, handleSubmit, formState, watch} = form;
  const {errors, isSubmitting} = formState;

  // const regex = /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-])$/;

  const onSubmit = (values) => {
    console.log(values);
  };

  const onError = (values) => {
    // console.log(values.password.ref.value);
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

      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
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
              {...register('email', {
                required: {
                  value: true,
                  message: 'Please enter an email address.',
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address.',
                },
              })}
            />
          </Box>
          {/* <p style={{color: 'red'}}>{errors.email?.message}</p> */}

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
              {...register('firstName', {
                required: {
                  value: true,
                  message: 'Please enter a first name.',
                },
                maxLength: {
                  value: 50,
                  message: 'First name must be less than 50 characters long.',
                },
              })}
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
              {...register('lastName', {
                required: {
                  value: true,
                  message: 'Please enter a last name.',
                }, maxLength: {
                  value: 50,
                  message: 'Last name must be less than 50 characters long.',
                },
              })}
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
              {...register('password', {
                required: {
                  value: true,
                  message: 'Please enter a password.',
                },
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long.',
                },
                maxLength: {
                  value: 100,
                  message: 'Pssword must be less than 100 characters long.',
                },
                pattern: {
                  value: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[^\da-zA-Z]).{8,}$/,
                  // eslint-disable-next-line max-len
                  message: 'Your password must have at least 8 characters, with a mix of uppercase, lowercase, numbers and symbols.',
                },

              })}
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
