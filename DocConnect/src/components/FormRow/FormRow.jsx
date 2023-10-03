import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import {useState} from 'react';
import Btn from '../Btn/Btn';
import {ReactComponent as IconShow} from '../../assets/icon-show.svg';
import {ReactComponent as IconHide} from '../../assets/icon-hide.svg';

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
  const [show, setShow] = useState(false);

  const handleVisibilityClick = () => {
    setShow(!show);
  };

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

      <Box>
        {
          type === 'password' ? (
            <InputGroup size='md'>
              <Input
                placeholder={placeholder}
                type={show ? 'text' : type}
                variant='custom'
                {...register(registerName, registerValidation)}
              />
              <InputRightElement
                height='auto'
                top='50%'
                transform='translateY(-50%)'
                right='1rem'
              >
                <Btn
                  styleProps={{
                    padding: '0',
                    color: 'inherit',
                    bgColor: 'transparent',
                    userSelect: 'initial',
                    _hover: {
                      bgColor: 'transparent',
                    },
                  }}
                  customProps={{
                    'onClick': handleVisibilityClick,
                  }}
                >
                  {
                    show ? <IconHide /> : <IconShow />
                  }
                </Btn>
              </InputRightElement>
            </InputGroup>
          ) : (
            <Input
              placeholder={placeholder}
              type={type}
              variant='custom'
              {...register(registerName, registerValidation)}
            />
          )
        }
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
