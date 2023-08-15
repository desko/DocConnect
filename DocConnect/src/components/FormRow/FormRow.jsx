import {Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input} from '@chakra-ui/react';


const FormRow = ({
  type,
  placeholder = '',
  labelText,
  register,
  registerName,
  registerValidation,
  error,
  invalidate,
  helpText = '',
}) => {
  return (
    <FormControl
      variant='custom'
      isInvalid={invalidate}
    >
      <Box>
        <FormLabel
          variant='custom'
        >{labelText}</FormLabel>
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
          placeholder={placeholder}
          type={type}
          variant='custom'
          {...register(registerName, registerValidation)}
        />
      </Box>

      {
        helpText !== '' && <FormHelperText>
          {helpText}
        </FormHelperText>
      }

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

export default FormRow;
