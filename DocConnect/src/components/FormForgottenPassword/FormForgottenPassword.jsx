import {Box, Heading, Text} from '@chakra-ui/react';
import BoxCard from '../BoxCard/BoxCard';
import FormRow from '../FormRow/FormRow';
import {useForm} from 'react-hook-form';
import Btn from '../Btn/Btn';
import {FORGOTTEN_PASSOWRD_VALIDATION} from '../../common/formConsts';
import {forgottenPasswordUser} from '../../services/servicesUsers';

const FormForgottenPassword = () => {
  const {register, handleSubmit, formState, getValues} = useForm({mode: 'onTouched'});
  const {errors, isSubmitting, isSubmitted, isValid} = formState;

  const onSubmit = async (values) => {
    await forgottenPasswordUser(values.emailAddress);
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
        >Forgot Password</Heading>

        {
          !isSubmitted && <Text>
            Please enter your email address. You will receive a link to create a new password via email.
          </Text>
        }
      </Box>

      {!isSubmitted && <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormRow
          type='email'
          placeholder='placeholder@email.com'
          labelText='Email Address *'
          register={register}
          registerName='emailAddress'
          registerValidation={FORGOTTEN_PASSOWRD_VALIDATION.EMAIL}
          error={errors.emailAddress?.message}
          invalidate={errors.emailAddress}
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
      }

      {
        isSubmitted && <Text>
          {`If a matching account was found an email was sent to `}
          <Text as='strong' fontWeight='700'>{getValues()?.emailAddress}</Text>
          {` to allow you to reset your password.`}
        </Text>
      }

    </BoxCard>
  );
};

export default FormForgottenPassword;
