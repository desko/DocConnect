import {Box, FormControl, FormLabel, FormErrorMessage, Input, Heading, Text, FormHelperText} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import Btn from '../Btn/Btn';
import {Link} from 'react-router-dom';

const FormSignup = () => {
  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  };

  const {
    handleSubmit,
    register,
    formState: {errors, isSubmitting},
  } = useForm();

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          variant='custom'
        >
          <FormLabel>Email Address *</FormLabel>

          <Input
            placeholder='placeholder@email.com'
            type='email'
            variant='customPush'
            {...register('email', {
              required: 'This is required',
              minLength: {
                value: 4,
                message: 'Minimum len == 4',
              },
            })}
          />

          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          variant='custom'
        >
          <FormLabel>First Name *</FormLabel>

          <Input
            placeholder='First Name'
            type='text'
            variant='customPush'
          />

          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          variant='custom'
        >
          <FormLabel>Last Name *</FormLabel>

          <Input
            placeholder='Last Name'
            type='text'
            variant='customPush'
          />

          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          variant='custom'
        >
          <FormLabel>Password *</FormLabel>

          <Input
            placeholder='placeholder@email.com'
            type='password'
            variant='customPush'
          />

          <FormHelperText
            as='p'
          >
            Use 8 or more characters, with a mix of uppercase, lowercase, numbers and symbols.
          </FormHelperText>

          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          variant='custom'
        >
          <FormLabel>Confirm Password *</FormLabel>

          <Input
            placeholder='placeholder@email.com'
            type='password'
            variant='customPush'
          />

          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <Btn
          text='Sign Up'
          type='submit'
          customProps={{
            isLoading: isSubmitting,
          }}
        />
      </form>
    </Box>
  );
};

export default FormSignup;
