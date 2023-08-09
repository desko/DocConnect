import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Text,
} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import Btn from '../Btn/Btn';
import {Link} from 'react-router-dom';

const FormLogin = () => {
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
        >Login</Heading>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          variant='custom'
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
              {...register('email', {
                required: 'This is required',
                minLength: {
                  value: 4,
                  message: 'Minimum len == 4',
                },
              })}
            />
          </Box>

          <FormErrorMessage
            as='div'
          >
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          variant='custom'
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
              placeholder='Password'
              type='passowrd'
              variant='custom'
            />
          </Box>

          <FormErrorMessage
            as='div'
          >
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <Box
          textAlign='right'
          pb='2rem'
        >
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
            <Link to='/'>Forgot Password?</Link>
          </Text>
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
    </Box>
  );
};

export default FormLogin;
