import {Button} from '@chakra-ui/react';

const Btn = ({styleProps = {}, customProps = {}, text, type}) => {
  return (
    <Button
      variant='custom'
      type={type}
      {...styleProps}
      {...customProps}
    >{text}</Button>
  );
};

export default Btn;
