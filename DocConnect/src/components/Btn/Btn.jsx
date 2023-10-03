import {Button} from '@chakra-ui/react';

const Btn = ({styleProps = {}, customProps = {}, text, type, children}) => {
  return (
    <Button
      variant='custom'
      type={type}
      {...styleProps}
      {...customProps}
    >
      {text}
      {children}
    </Button>
  );
};

export default Btn;
