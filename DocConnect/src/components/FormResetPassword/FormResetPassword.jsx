import {Box, Heading} from '@chakra-ui/react';
import BoxCard from '../BoxCard/BoxCard';
import {useForm} from 'react-hook-form';
import Btn from '../Btn/Btn';
import FormRow from '../FormRow/FormRow';
import {RESET_PASSWORD_VALIDATION} from '../../common/formConsts';
import {useSearchParams} from 'react-router-dom';
import {useEffect} from 'react';

const FormResetPassword = () => {
  const {register, handleSubmit, formState, watch} = useForm({mode: 'onTouched'});
  const {errors, isSubmitting, isValid} = formState;
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = async (values) => {
    // await forgottenPasswordUser(values.emailAddress);
  };

  useEffect(() => {
    // console.log(searchParams);
    // console.log(searchParams.get('token'));
    // console.log(searchParams.get('id'));
  }, [searchParams]);

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
        >Reset Password</Heading>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormRow
          type='password'
          placeholder='Password'
          labelText='Password *'
          invalidate={errors.password}
          error={errors.password?.message}
          register={register}
          registerName='password'
          registerValidation={RESET_PASSWORD_VALIDATION.PASSWORD}
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

        <Btn
          text='Submit'
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

export default FormResetPassword;
