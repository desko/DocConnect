import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Text,
  FormHelperText,
  Link as ChakraLink,
} from '@chakra-ui/react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import Btn from '../Btn/Btn';
import {Link as ReactRouterLink} from 'react-router-dom';

import {SIGNUP_VALIDATION} from '../../common/formConsts';
import {LOGIN_PAGE} from '../../common/routes';

import {registerUser} from '../../services/servicesUsers';


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

  if (isRegistered) {
    return (
      <Box
        bgColor='offwhite.400'
        p={{
          base: '2rem 3rem',
          md: '4rem 7rem',
        }}
        maxW='48rem'
        w='100%'
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
          >Congratulations!</Heading>

          <Text
            display='inline-flex'
            gap={{
              base: '.5rem',
              md: '1rem',
            }}
            flexWrap='wrap'
          >
          Your account has been created successfully.

            <Text
              as='span'
              color='red.400'
              textDecoration='underline'
              textDecorationColor='currentcolor'
              textDecorationThickness='.2rem'
              textUnderlineOffset='.3rem'
              transition='text-decoration-color .4s'
              _hover={{
                textDecorationColor: 'transparent',
              }}
            >

              <ChakraLink
                as={ReactRouterLink}
                to={LOGIN_PAGE}
                variant='custom'
              >Go to the Login page</ChakraLink>

            </Text>
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      bgColor='offwhite.400'
      p={{
        base: '2rem 3rem',
        md: '4rem 7rem',
      }}
      maxW='48rem'
      w='100%'
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
        <FormControl
          variant='custom'
          isInvalid={errors.emailAddress}
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
              mb: {
                base: '0rem',
                md: '2rem',
              },
            }}
          >
            <Input
              placeholder='placeholder@email.com'
              type='email'
              variant='custom'
              {...register('emailAddress', SIGNUP_VALIDATION.EMAIL)}
            />
          </Box>

          <FormErrorMessage
            as='div'
            fontSize='1.2rem'
            color='red.400'
            lineHeight='1.33'
            letterSpacing='0.033em'
          >
            {errors.emailAddress?.message}
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
              mb: {
                base: '0rem',
                md: '2rem',
              },
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
            fontSize='1.2rem'
            color='red.400'
            lineHeight='1.33'
            letterSpacing='0.033em'
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
              mb: {
                base: '0rem',
                md: '2rem',
              },
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
            fontSize='1.2rem'
            color='red.400'
            lineHeight='1.33'
            letterSpacing='0.033em'
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
              mb: {
                base: '0rem',
                md: '2rem',
              },
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
            fontSize='1.2rem'
            color='red.400'
            lineHeight='1.33'
            letterSpacing='0.033em'
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
              mb: {
                base: '0rem',
                md: '2rem',
              },
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
            fontSize='1.2rem'
            color='red.400'
            lineHeight='1.33'
            letterSpacing='0.033em'
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
