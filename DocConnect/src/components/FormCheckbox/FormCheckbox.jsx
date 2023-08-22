import {Checkbox, FormControl, FormErrorMessage} from '@chakra-ui/react';
import {Controller} from 'react-hook-form';

const FormCheckbox = ({
  labelText = null,
  LabelElement,
  register,
  registerName,
  registerValidation,
  error,
  invalidate,
  control,
}) => {
  return (
    <FormControl
      aria-label={registerName}
      variant='custom'
      isInvalid={invalidate}
    >
      <Controller
        name={registerName}
        control={control}
        render={
          () => {
            return (<Checkbox
              variant='custom'
              {...register(registerName, registerValidation)}
            >{labelText || <LabelElement /> }</Checkbox>);
          }
        }
      >
      </Controller>

      <FormErrorMessage
        as='div'
        fontSize='1.2rem'
        color='red.400'
        lineHeight='1.33'
        letterSpacing='0.033em'
      >
        {error}
      </FormErrorMessage>
    </FormControl>
  );
};

export default FormCheckbox;
