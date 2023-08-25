import {Box, Heading} from '@chakra-ui/react';
import BoxCard from '../BoxCard/BoxCard';
import {useForm} from 'react-hook-form';
import Btn from '../Btn/Btn';
import FormRow from '../FormRow/FormRow';
import {RESET_PASSWORD_VALIDATION} from '../../common/formConsts';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {resetPasswordUser} from '../../services/servicesUsers';
import {RESET_PASSWORD_VALIDATION_LINK} from '../../common/routes';

const FormResetPassword = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState, watch} = useForm({mode: 'onTouched'});
  const {errors, isSubmitting, isValid} = formState;
  const [searchParams] = useSearchParams();

  const onSubmit = async (values) => {
    const data = await resetPasswordUser(
        values.password,
        values.confirmPassword,
        searchParams.get('token'),
        searchParams.get('userId'),
    );

    // eslint-disable-next-line chai-friendly/no-unused-expressions
    data.success ?
      navigate(RESET_PASSWORD_VALIDATION_LINK+'success') :
      navigate(RESET_PASSWORD_VALIDATION_LINK+'error');
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
