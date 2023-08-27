import {Box, Heading} from '@chakra-ui/react';
import BoxCard from '../BoxCard/BoxCard';
import {useForm} from 'react-hook-form';
import Btn from '../Btn/Btn';
import FormRow from '../FormRow/FormRow';
import {RESET_PASSWORD_VALIDATION} from '../../common/formConsts';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {resetPasswordUser} from '../../services/servicesUsers';
import {RESET_PASSWORD_VALIDATION_LINK} from '../../common/routes';
import {useEffect, useState} from 'react';
import NetworkError from '../NetworkError/NetworkError';

const FormResetPassword = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState, watch, setError} = useForm({mode: 'onTouched'});
  const {errors, isSubmitting, isValid} = formState;
  const [searchParams] = useSearchParams();
  const [dataReq, setDataReq] = useState({});
  const [networkError, setNetworkError] = useState(false);

  const onSubmit = async (values) => {
    const data = await resetPasswordUser(
        values.password,
        values.confirmPassword,
        searchParams.get('token'),
        searchParams.get('userId'),
    );

    setDataReq(data);
  };

  useEffect(() => {
    if (dataReq?.success !== undefined && dataReq?.success) {
      navigate(RESET_PASSWORD_VALIDATION_LINK + 'success');
    }

    if (dataReq instanceof Error) {
      if (dataReq?.response?.data?.success !== undefined && !dataReq?.response?.data?.success) {
        if (dataReq?.response?.data?.errorMessage === 'INVALID_TOKEN') {
          navigate(RESET_PASSWORD_VALIDATION_LINK + 'error');
        }
        if (dataReq?.response?.data?.errorMessage === 'The new password must be different from the old one.') {
          setError('password', {message: dataReq?.response?.data?.errorMessage});
          setError('confirmPassword', {message: dataReq?.response?.data?.errorMessage});
        }
      }

      if (dataReq?.response?.request?.status === 404 || dataReq?.response?.request?.status >= 500) {
        setNetworkError(true);
      }
    }
  }, [dataReq, navigate, setError]);

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
        {
          networkError && <NetworkError />
        }

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
