import {Container as ContainerChakra} from '@chakra-ui/react';

const Container = ({styleProps, children}) => {
  return (
    <ContainerChakra
      maxW='138rem'
      px='2rem'
      w='100%'
      mx='auto'
      {...styleProps}
    >
      {children}
    </ContainerChakra>
  );
};

export default Container;
